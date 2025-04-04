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
    "RybtpeEaKityvtfgDpTHzEGDuCNKU758D5CJSCPn2rMckzzgke1t5MLUD79W8rZMaV39CxFZR86H2oaLnN5MaGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNsq12jzwUXbWMx2B3zNbRpNA6NkWo2S4ioEdfGGSn9Fp39JQFrCtVQd1psYMMEguDa1mMn18sqdY17ryMArTrd",
  "key1": "3m7ZCKhoaz3c67NWuFx36C7QVh9HMg8R5AzGmr2mJp7fWmUp9JmacmyqFyTUFamzcGJknqTAxAL94HF3FvRKAgPY",
  "key2": "K5JyamQvgZVXmfRC7Hrqx6QS3dJLaJrv6Ma4X8BEcSPVynfxRxrRY94FmnEgcpJ5jxiQnG1x4TDTZS4yc93oJU1",
  "key3": "2osdUAq6PDwpkihZZmLRnuWivYBXcN1cReL7LdVnSzo8RUSrKgMwtAjw6pLTdtt7W4bnZo5cCBymZK7WqSohdrSy",
  "key4": "2stRFSUG3nXJ7XPicBD47YbSYqrCtE2c9K4f83XLaW6ubAjRPNffvmqyBTh6VjCpMXKY55kKecYX7QH4but67d84",
  "key5": "3HWFy3F6qv2Hb4JhNHzkFbKEi9oFTtbpsiGA1QF31PkWWU7rrTUHgf3XCZEFJV35YxTkEA81n9UL35PhZrRC77a7",
  "key6": "5kDAk2o5L4cYHoAgCJKDSCbF7ibjDJ2T7ZBdt5JLXbHoafh7qiNCCW97aYvMhcQnxqyzgnHJojkqCkSV497t5pNM",
  "key7": "5iVLsAPqXbTgkdN23JpB5ioq2cPpXmmSe3pBSmBBkGguWVPso4Pw5rbbiDgbjNCA26DheFc6Kg6yyp2PaoBKysJS",
  "key8": "2idytRXhKPHe3MxyxUkTePcbrZgjXJ71irEZ3EBYWdLx8Dx2Ch2zKnmwyzhiSALXQWtMagmkg4Eco2C2oEMnfaq9",
  "key9": "3mEdXbqB9P3kgwNF74KAp2m41YGEm2fqJeNTUL2cg5PSR2L1WMF1ATWVvvzFnozDVnDqGvgUDDP6PRCb78xCpdDD",
  "key10": "LZ2r1xLyx3cRWwPus5yYCyP5Vkn4ipzLTrecgUjrEVrtwzp8UFpJX9mpzX63nLLDByXpwGyMXvGU3bY3TiF2VuH",
  "key11": "5QFqnTd7ACqXiTzKz4jczoR1WkDfTAcpWheyLbRFePvPT4zmSoK51oo79disd4su7dovc11T96URFMFGq3DTjELf",
  "key12": "246EE6J2J74bYVrcX3gijMPFFTdWhbG6Ryj4wg3QUuXPnacn2D3g8jcKYZv5rX94kMHRuBbhnwwNvMugvnwFVZ9J",
  "key13": "2CxTVBa8fikRGxte71bKYRRSKqDhne8Yn57VZrisfLTQq9SxuxtjGvqY1upuHeCEt24imJ1k7wRt5zWK2xsZgtia",
  "key14": "S1fri45juk4Kbyj3TkipjnGmuBo4PQAVLrDe9TCQEz7GyKP13DwfQFju22GESoVfcq4YKyY9NsDPvE8m7zx6ZDw",
  "key15": "3Va5sAUebZuKi6iZ9xbmiC3S7xMPtjH19i5vM83z7RASYKKTvsykQc15PjKQGiuYxn68SAPvbxHYUrsdATqLTBwU",
  "key16": "3cxe5ZsM4jJGcYpQLuZb9hFneKpt3cVt3x3dNLFeyAdbn139spnBrWXELmW9QMimhPu8Ct9kqUMiwKUa1zh3LmxL",
  "key17": "3cRC83p8aivkVEGtBJyj2kFnLeoK1RZpWTWEWtyedugiJoppWHUxcQCpstSx78r4SN47U2qNN2fk4ToHzeVZtEwS",
  "key18": "3pLUyx9pvGPoVTsWeudY8FniU1vbTDtC2aiByzUBXJCj7aFcPj7SfXQHgnhN7rZvntQNZc4bDUFgT6n8ZgZrKcur",
  "key19": "uUetTLFHAZm3schqrjjfjbgCtyBL3iyYJ1utNskd9FaJwyYWeF5PLtnQPH58ZXjy2H8nQQn4n1FQv8dGBrrrEtg",
  "key20": "54Dj3FUepwk27bckiWDhjaYBJABEVgWX7WtM178eo36NuxKiGMXoxqeXXTDXf3PmBi99VRPSNJSt1gYqEGEjoXiY",
  "key21": "3RicBJd5b2UqrUM92zKa12TM2FqCob5wdpJEXtcoKSfGzx8fJCoe6nQaqDGGBm6rL5qgwhdQrCW2PT8A96RHtTTD",
  "key22": "2VwK38s5EDyJwTKq4RNtt3tHGDiVwRmkNSHfH3KchTcZHoXRidnTPnQJ2ZV9nWwR8SeLpAWnDWEG6fvAxAxionsQ",
  "key23": "2su2uVi7sKYJ1PH79kpaUYf7HJrUjrzrH7wTGUVmov5CTywbZhTqKi7dupbsKq74dGDRdrjQqTZVhSePvFYYmNhB",
  "key24": "2WxYdeWAC6b8vh2cEN1mhZuFhfb2EKAxyj9ygKXgqAs8XSog9Ps1A4cBspUZj4bBLGyKEAfo1bjQhpsve6ZcooiY",
  "key25": "5oSc7m8pHRCT6wjMMPYGS5i5EDeYRwbamNqHTmpuCM6aMrHG5NBso4QEHVm1HaYRGyWCndqg3h2mYQjM7sc5RTx2",
  "key26": "33MzoC4DNdMC5A8b3qn9LeG2FkXp2QpVNfiVJP4Yqrk2MLgTuxTvqkztJZJFHLBrtM7bNcTk1jDhQ9Gc8NAgazz5",
  "key27": "393yRXynVjSdK23mchCnCM24f474fJFjmZC4i5oeT12HVUPTqKwy2u6AAwD9QWkc6EWNGm2eRVGj5WEm33h6pZCi",
  "key28": "4pm8fJFL7cxpXtRVEJ4gjX2cgyKWbHJpwcYM9fj2EKw51dxauCMoWPZQTTxNxUoeXY8uN4HuVhRfV5HJGnQq3vQX",
  "key29": "2WK3snM4Bqe5Xa1ztBNaMjViZk5KdNkLAVA7FdyDod8FLYyaAd3gqxaHVfh2c91a8HhUdX6CmwTuZHFnzTrP2ABh",
  "key30": "gyhvojyFeMVhCncsMq4v6ZicgYHQ34Tw2cYDDtFEA3JkdWuxdKZRecBB5HoEU2V8fhL6HZdEAbS79CoEFLDnqkU",
  "key31": "5XiXNSBpFGtEjDyXfZXrd88ENtswcykoPMchip5pyFJNjtUo7iC39YkyNRXzMVbJCnDdLNQNPSxNdQqskBGM2PDH",
  "key32": "3VLwdJnwC4RhTDzWQhVRFEeWMXqtXXYWEguXtntJde3FSeJbrtrHmhtepCwJeQVLvHhC7xVKkYDGyKgFYbBsEqk4",
  "key33": "54ohB1uXyhLtgvCQjWGB64tCNzqfAeWaRkBwgfCgw4UnhZnJsExQTc1yYsrMR6fckQYMAhTCRqKqDdF6Bc8GsZkm"
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
