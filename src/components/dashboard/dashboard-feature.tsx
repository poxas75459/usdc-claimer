/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "XqjY6jQ6ixXMWHwobb24KiWgdn8K49BMC8w2BhyiJgr5ttfJ4DspJWjjJdHSLrUn5PeMxEWvx2YUF35dYTyG3YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EV8dpuW1RMvYrLiv3Szjcmqzx5gHbSbQW7CRsbwCLxXqr2RbGK5kzKC9V1WSxpTpxtkUt2vgyEKXGAUgR4CTTk",
  "key1": "3cSSiRP2YyZ4AzMjSKHnjEqpgs5ppFm8LBFsBbjXDRCSWtNk1tnRquTvWXDWJS6LepsAit6FCTU8XMjpPHWYMJ6S",
  "key2": "3EENAvbYvoByBReDsZPnw65BUr9vQ8odRMCbPLuUDiGJauTqvzW2oEz4QcrAmYgz48Ecafa1mNLKGFLQBZXNi3vx",
  "key3": "48vcoa5Rwwy3Zq4kQcHN48QjS2WLrjpziFpNrc9DTH9YaFzFKKNr12GFGcQvNNfvhPtoiBVBPbHKUNBriFpfJ7CC",
  "key4": "4GdGNi5a3PKnyK9u5A3JrDwVVBW5WcPBaiAvK7Afo2wT7brDCH6NoJdB2cFyZSTaZuDxzb5Ug4cusf7gvFDB5Uoq",
  "key5": "2rSZEP5WC9eYrhx8afMWT6DUEYUsfQWdNQGwHmMmUbnHkcFLdEGb2w8oQ4zGskcYMQQRAK1Jh7RTc2UuW5QfjtYR",
  "key6": "evu2vGuWAj4PYwnqj5rR8LsqSaXn1HkgFF9eAqwVg1sjTWpB9seqNoxwcx7ZJJuTCpn1sVsF31CwN3K739A3sG3",
  "key7": "38ejKh85HpZ7AZKyvJTyQGE6bYZFXhdAgSWBz7sLpzM5PbbuwPshthJUJuhNTRrbwqjbzuCKjkzvXkhZu1Dc6VKB",
  "key8": "5oxEC6DxUUgeDu1JCq34gQcDLmVcSGYVnrZyeZhbe2SWFms7jg25McYihZixARbG8MQwP94RjLC7yVtYBnxtbSi7",
  "key9": "5d3H8RTCxU69vQD9vFDeNoTQSyFb8mokTrSfnsTYirM5v146FYe4JdmiNbzKMYiAKPUuhth5p8EotCXUFqy2ALmb",
  "key10": "4dT3NkXHKuiPzHQkMyEbfwLsC7PLrrRT6m3Hta5cyfDyLnrB411YUGMGGkwhYvYxAvYWgBJ3PpBjJVBjapZN6XQt",
  "key11": "3n1x64GvGG2i5SV5WFe9K3K9qPZzkCYSv2f7HNV5gBUJaX62cMyfZzAFxnVD7mgCS9MtmWqJfRYqPtPwoLc77kKB",
  "key12": "3GDd1yadjfaM16kaGBRVgDBqEg8yuRqAHMgcrim8fWCjW6qgT7McFrvWKwyaY8j9VgoZRwLn2PheuZoAgYYi27QP",
  "key13": "4sDn7mU6v6rbfuJfV7s3i4aXSK6Ede6i3vKWYwCzgwm96QWbVo1b7VWo2NfZ9jB3ot7RAjUvj4AavBc8wCm8nqsF",
  "key14": "4JXgfYKd538Tns9xzUFRNj9rRLsR6KW6bCuYtSrw2e37ZjUnH1S1h4vzmRjHNmQdYCEywS9qyyTnTZ6y4oceHdmj",
  "key15": "qmSsDJKuGcKJQiNAvX4rcF85QvitBbUVVQR51WZgvQYYAzM1Bvh5NtdGiX2Xs4kWDwQ56QCrQuZvW7dGvhQ5Y95",
  "key16": "5AuZ3PXTGJYmF8CT8nC5TUaCEggh8A1CvXMzLR3uCUgNQuCfjSgs8wPBhAAm1n4sP1RsgeoARiGeF6oKP3Ac5gWM",
  "key17": "3f2HCKkuTqvXh6hmV5vPhRak5eMmzuZrVXi2NWrHjnMSBCBb6WVtM9w2q5yATChYfizoPd1fQCB4Mj33QYYfXtZT",
  "key18": "2Cs9MmJXyxifSzpDgFkSJrGm2zL8VfHMinDPnkZNfVwonjp4cCZFxh6ZPNACBNwt7UgBnS3aw7vkp8XPMyeQhXNs",
  "key19": "5zAsa7zhdkMrygb8gxSPZ39Ut8qLA1a1zAeYceioHK3zYCaMdcAFhNtHEZHFwJzvXm6RAy1mxw8UgSDPscSrH9zi",
  "key20": "2nUAnMPyLfF7zdWGUarPPEPjtiaxxfK6EFx1ca2GqrDBUz3X64XFjyzc9SbyJ2424ps4HTXubJRe6QHb74tgJ9EY",
  "key21": "cKxfU3EcJvfr7HLRr8MjcCP9KAkfrvmw2hLzc5gMKm7GLhgfXRVZ2F4K8bkj34L1tkaSp8nvUNdeN1wX6h5T2kR",
  "key22": "4aD8tFdY5JTJMSs5YZoxozmGc8Hca3bHUaEioGVuTihi6ZynFTgUrLixJibJJwMSiXee9s7QW9928USAvPmRTXjy",
  "key23": "5P4TtzCFEotwnvWMU5PiQitadQX4xs6amYpB6t8gd1kpSSMQdNT8iTh7YzRciQdzdS87X3ttpPh6Pbt3TzKdSqBM",
  "key24": "2Ydji2nLb3m3rJruTySuJixW6XFpGmk5hDGeRMAjQJzVTidJU8Jy4LAberqWsxdj82c8YburPdrucen9AM9xA7s4",
  "key25": "3GTBL7ZY8FAoDNqJAkWxqB4LZQ9JYE5gXFR31Z5TKwja2DUyMsqtekcA3oe2PRTtquPxBxG2fnRNRj115TDeDzku",
  "key26": "53yQFxpZUjhuTHn1xgXmw2Ygh9k5pP2ZAPVRSY6nJ9MzWvkQ7L3KPRggjUrqVbAti1PaUzXAmnhDcgX2DPq8JN49",
  "key27": "jkFLQVSpUQjnRE3wponcW1gY53SBf73tRhTB9khJ2xbpDsyXstPV23DU2J2rdckYnHCD8bpceZZxm1QNDb4GSkz",
  "key28": "3jPzQgcEnijp6bSqg3DTHjDYi2T24JR6LSU9iTAKTP43pFqcVuhPeo2Gy2ThfoyL7pHjAeMRudZbR1TkwdBj7k3C",
  "key29": "67bzYc8bfjD2UxUjq9D81gUWnPvRVcowDagEkXj8R5V1br8NV4xeopohD8uZ9A9TdwrQiw2sZxZLkEWwUBnbCUBW",
  "key30": "4WxBuQ9nrNw47uQAQPJ7Dw4Fh2BZpaG5JJjHkNSRNmigxxebeNA9FDVey4Qfui1C6LuXTftonMs8egYvoqGNF4BN",
  "key31": "27No7xHw6UdyAYnBkPdczaHkhc1bX7NSGxNoi6wgcqbkRM9RYpUdrwkycbuYkSKoqkv536LvGyMofwybpjDgrure",
  "key32": "PETRstMHCquf4AnKWFZjyyA6onKqtzHPZyCuJdFUy3BoejCN4GZbZFkaomk7uN1FN4m9yMxsCcvxD4qbqZ5FiAV",
  "key33": "3ETwRQeJEjLbGWPWy3YPGQ2gDLbCWNSpLiuD9MT4W2AgjMZvv3uSADcoprJCmmBmYLJBwAms3bcYu6ExAqZnCSRV",
  "key34": "3XREuxm5anKCECo4Gydc13zWeScztQHtL8CJnjEMnMfGjA52JkK2LyutP3jSddTWXQTdePTfwGCPkjHnipxtzzRi",
  "key35": "2YnFUK1KLZsiFVEhwZwfCJvSgiUWvADhGbKhKm1G5sWUMFr9mLSqojwCg9u525mHdcBTnSCHqahL3h1snyzFZUex",
  "key36": "2QsBuvbyNgZRjxsFmd5N2am14KWAymauXLWuWGnhAncevkH7vdhkxtPp5JutmDk7Ueq12T3uqrMDCiyEZMGMZ85P",
  "key37": "3x9EYzUTwWw5QZBQ68huc4KZj3zNGgA9Kt7cDhV3wMhRRBD1nA2okeJrXAym72x3NYisY11NgLtDJ6XG7ZMZtakD",
  "key38": "2bpsef9Mh8V7hfAWL76PKyd8btJdHgsrCsEsokUX7quXzmoSfCxD2hTAAwnixhhC92MHSSVk7eLAzzGoNUU16js"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
