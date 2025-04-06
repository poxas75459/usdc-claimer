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
    "5kgPRTXy84ohVNJ8Ls74Dw42Rip5rJAh7dv46ZgyRoS8VS33szGfS2JYpEQuMVRuEDz5v4MLnMNESVPZQFVjXR5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2BQz9LZfQNdZrg58TspaeAcGbtp8y3fFDyap3jPupKJc87XWaVy9iMVJFQvh1i9mAUqKdQGfYqZPr4RfgEn7Ru",
  "key1": "4RVR7G2uAueR2Yo1pRpDxz9r8dyqGuTij8Za3SLFYWqy6fS53cm74PGTwEnCeS555jb2ZdocwR8eY5mRYC9U8Z4d",
  "key2": "2RxrpfPD66cvQL9zEGPZfy87TMGsaBcLczHzvoBynaZJ57HSsER5Xv9keSggBcHQneNsENyGmjLb41AQExxEQ575",
  "key3": "5Fx2qxFJoG77aUXezYq7B2GG6bkSDSz75Q91mUjwexrTn9dCs5svcmVwNfwFAZBQpFqeLKCJXosHvycLJV7Bozj7",
  "key4": "54xKkV8wNNviF9kRmqtYvBa9YJvMSc1VK6eGUyopLxFcghixV1KLU8Ja55UeSJMJ4BQUZTgRUQJjDk1jDFBYLFDX",
  "key5": "2RunaRRZJc3HMW3FgEzjjFUXx36icG3oQyK75Gc6Ua8AHM4ei6jKSqiCKUCV9TbRQ6h4smQHm566CfM1vfLYuJ42",
  "key6": "3pUHUmbdSuhTFfazwjQEjUdJ9JiGfFEGy9iXt5pquEWKiutkBPSXLYJbuf7gYPLvTdCEYKmZKgiGf92BTRZD5GY2",
  "key7": "VdPjtjbhDLfp8w8uCBzmupmTMegwf5iFAkLVgC9ByNv3CfQBnv7AdLt7YBvx6Li6XKtYWbUUHXsLyGKgwT3suTb",
  "key8": "hUQcwEM46cba6Qr24iimz9TUqtZEh7bMTN2uvRux6KiPHJuoerYaAcDTSdKBNGdFgaKf1qcdwG1CfAQPeVa1Suw",
  "key9": "4zC5uJBH2sET2Fv5SMoKpXUQn6ELSpg8iyWAZ1x91PPCCxnkk8i4YkT93UANiGhZhRAeLGJ4hpzsWWL6FYboxJXR",
  "key10": "4ne6W3TnN4YSWxt3F7ymrraU8VcPbjV4UfCckjiGkDVTnXMW99R5jJyNYKqCeuotfk8pVadpdq2BARUf27MWrXTR",
  "key11": "6xmABjjpTcLVv6DbWzpubNFo8FEVT8LA4Y7ZNwkwsTuBchEnqWxRMsM7RCi84AzLQWia5EgyxM9fe4Brqzuyoh6",
  "key12": "4mT6PgUQmuusBPZWgGgmj2pr7izwX3oP5EgmhEWBDNF7hJhTt7uELaMrjAUpAtBtxVuwE9Uiii5fbWM1qrT2DRAk",
  "key13": "3dZ59zw8XoFFtdY92E8G6F8xP9QJtDRXAbqgSbZHkmPiZZsVhtGhfqczTkDYLBnHRhozu4noqNGwRiSHTWjUxAjB",
  "key14": "3Ts6Sz4drPvdiT1DFCFgo5hhWraTQJuiz2GcjBr5GN79quysTi6vLrWJ1LnZwso9iY72Bo5PHVtoba6zabf2hnXZ",
  "key15": "3563oGwJahjGaAMnpRqdRUjLKDCJxcCvZxMWoo1iGGdvhnieVBkCaDVZjvviZqPCMSJqtweEsqMxJkbbF8Ro5fmn",
  "key16": "5YwwAUztFk31KSM1AzjQ8qAqRQQeiqTKt3qbXc527zaiLWPUet67kGq2xwURbNDcxXGLBoN6cTCCEQnu4RB2RRV2",
  "key17": "5KDmMXw5kK5AawaTE17hmLovCgNE4LkBiJagAK3oUfXo3sfvamibQuRmc92gSe779gfsEDMaqri4Ey71h7epn8Pg",
  "key18": "63fQFALdf3z2W3iViBVjjGhxWZnE7ukKfcrJHSnpyuKkJztoZ8FqYwfzcsDbhcyAWX7XgX2FMdURJBEks91HqEdi",
  "key19": "3sscQdPbFJ5wUXtJmzLzwgNck2cK6jRdVpNQHxE7SmdxzWmmgK8vnGvAgMmRcHt5yQUUQjAT5gBhYXMc6teQYkBN",
  "key20": "3njYBV78AmyMDc1x4upGFSUCNRWnzrkAHAJCshSKvkniPtV6LCtmXDqiEmYfWA6umkzPpQFaJPPsVWy5H14JZha7",
  "key21": "33eCgyWezKTXvJY7nUDYNiQLuBN4JPiUxD8UTu8kSSCcXhtHxqRVGh2H9ZifaoCQNnkpF2ncmzawzJhwqDjiLbpJ",
  "key22": "3nP5rLsrwJwPsehP3wyVvDwwLLjnoSutE1DaiLfqXtmxRgwz1js6w9tF6TSFxVhRNw42T6mzrH3cuYTQS6wQ1BLW",
  "key23": "32E5dvgQqR2uUwBg9uS39gdB2DgDw6Zuh3VkCeBF51VEf9Lc4hSkS4TTnN5AFpn5DinNsiQncCqQ9jjJJodB1n4m",
  "key24": "4Yww1vhvvp8c5D7fjeEdPY5krBYPEQ5EpBpkCedTBHjJUXEZKJz85CaLSKumBpZhRFsm38o9ShKbmSgzTfJ55DDe",
  "key25": "57AmKhKE7M6nYhE57RyviFHDBEtrU1qpDKpcGvvjjFYjMG9Wv38TV7RyPVpuEqRj1NgtqtveHgN1aPrbcMRdZw7K",
  "key26": "5HX1VXHC7zwTABZXLiniwHDm6eVDSJCV3LsjRkEhePKouejvCSUmWgWMoDmqwVJ5YaUiVgzv3vHSChAz7HXKgCjd",
  "key27": "Q4bGAPrhxY1pDvBMGspBBdGyKhNh1TyztpSZmn3weHHh1b7fstChab4DrqWX59UFyNNnMLtDYgSQLD6U55rtcsR",
  "key28": "381CM1cA98NFdWi1quiUaVJMYVEvjQeXM2cX699zX3CEHvYMFLEPeSK1W9tScvuxaVpwnvgJ4wbJFCzRb2wdMN2A",
  "key29": "NVfWuXqMBgcQRX1yfH3XEVUUHEcDRp2H3ftLECf5dkQzPsAyGbYsV3Kpn77mTCAXC4X8Sm992ieu4ksgnQCi3YU",
  "key30": "4TV2a5WmxDKck1ipo49Bn4ZBS4b6jMpxyfXXTV6iVbVXoSErcyj5nqhEuyfJRbfzVZQjmxq9cTAPJK3Wk8RufLxt",
  "key31": "3VYb3w8fkPeeLNvkKTGb18yTq7A5SovrAmMHBTTsDppt98V8PcegfvrpRqE6hCxs4uRso21jq6k74UrxqV1bCVJs",
  "key32": "2fCTSkYjjWTVvfcoHnQyGHagwLhXJ3WxKd46FCNrPt7UZzRforv7SJnXzGMVQFbGuxwiEgHaktnrqYoECiWRdzEP",
  "key33": "56EGhBfZYdVEmqeVAS3DMq4QafQWLNkobwYNfFLpCnAmrTmxUWgZXkBsnhfT5653XAvUD542rtU26HzwYPjZvfWC",
  "key34": "3udXT8nGGzNyWXVBUjXxQHvkM4Bs5gDDXfwTLeqya6pnA4erbmmwr2d7Tw4vCUgnpfrvmdj7FeFtHXkmR54qeXNw"
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
