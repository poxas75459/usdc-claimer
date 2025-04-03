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
    "2Sohz1so4aWss9QpaTGX4EvcqtpbhqiiDLaNN86Tw9Zc6R5hpcm9BRd89zeN83e134SkTxpeiwof6fPs8iiCBVFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMa1XoRPUpmRV8a5Zu3Je6pnwnrzbksydVkWRht2sCkVSa98E2LEjUK5rx1Uq9d74Q3a32ifDChKWmJibBr913t",
  "key1": "eGL25a234tecg6iz93eRKnoVQ8R4ii1cMiLKwdjww8RpfGXDzeqoJtBapNmrxVfcDkG7ebxKPgUxsQeSwxHVgWd",
  "key2": "37dzCdcCuzwc3zP4gr4xneMDM1BTzbvpR2ywHMYn6BJiT2N2vmxW7W5P61rNdgf34srtjm4pEnG7cTFEZSTHUaP4",
  "key3": "4tRvTSePvfgmjMjVNzgmP36RrAo8xKJmRMFWnW7qQ9uwmtEhKRTrwGKk4DYTGsXtzGBPChGeTHd3YMhZiVrfT7pZ",
  "key4": "orzCcukdKbHi8PYVdMHiCkSaio6noSoj3pftczBXQ11StFiTnyT2x4wr95wTZ5Krvdnv7pt1u8wBt1YLALNhvcx",
  "key5": "2QqUstqLSE4MKedfaXRnx7ALPQDeemz44WwDVzJ8zBzFQuAWCvJqvW8WvbTeaDpifv3Kr8bkPLBVLxqxGmvWKV5v",
  "key6": "27dUCVHxYMBPFFvE28PxaDJBBNZy2fAT7sDtNFxjjW6tw5CL196yMPXcvYzdK5qhMDzP99c3A8fd3k3J1As9TpZm",
  "key7": "5Z9i8p51h8223ow6R9Z5Rq4oPy6LGkf1vGH4SEJHwyv2WxH3xDYiJHTcJUMqGgGiHPDbNC5s1RdyabG53n4nT9SE",
  "key8": "2pkBb8fi3Nrnvwa3qXYE1hQ8eYG14UNvjdbXNWKragJsyPG6BvdvZa9yJceFCbs6Kik8YVeaSNjXpkUWvgsmYDkZ",
  "key9": "3k7kDj4RuyZMGpCcmYx37boJjMjAi2th3E2KtBw1qHuDbwu8oZ82BCTiWDQ7bPSj84a9TW5Chxf1aapMRtUx5ZvX",
  "key10": "2XAYwoX6aLyY3xW9veiCGMkbRkGzrdWZbDELapm67DLnEJB41kEw6FeLCZaPhwK4KEyExbm8PdagTMC5kysbRjKm",
  "key11": "3V5Qak1vBs1MTEdT1JKRzsPTiVU5V91r8RxWZkYZHJzfz7NA6wdCsCjckYxBrKy9XJAWD5vyCxsAjmNNkwVwXkzw",
  "key12": "YDAdokvMhCbBbUSCJQB364PBqJxHMYDnrGVjYF733Azi7StKoup65cADtJoc3W8FdJw3vB2r3iVRapaLCRydd7b",
  "key13": "51PgqYWsNKCQkzosEM7NuvGcCLvStppvcKKkK34PeR4CT62TZJzyLKFi1ugzhzH3YGEKvSC7PeQpDi47UVTdQS7A",
  "key14": "3zihaxPZaYegcqqR88XS2dcceQWkXnGwv7Mnvg5CrdZiQ8U2gkt6QrzHNAG7SppupLwqnFgwe5Jyf5gSvbWPC6fL",
  "key15": "Fd9EDhG4fPonGhBn1LqUtcu99dUWExWdBn6u2sgkhDxuivvCQ2EFqjGWminfMRVY5snHTbvPw7Ka35imHeHP4td",
  "key16": "3BQxAuVqBbX6z7ce5huLn4dyHQqYzcMEMV5ZjthMudJwx66GUyKKGiabUjdrjhP7iaG4MYuMAnFHCnY99825Xska",
  "key17": "5L3HMvrwaf6NFitXMJaeFD72V2xGURrg6w6WUuzAWHLpiHdgaCKa7cKP7sv2MJC12QM3iwfkrzwSrub462bdGHYx",
  "key18": "4JKfV9p9JcMbi1UNTovzMhjEZmidaYBgrZxMNtKm9hnrqqKk4PybWyioPJaNJpifapRJ9aBZQJWDBpf699RKuDKD",
  "key19": "aTLLSfsMY3nskPf6rc5368546qZ2rdYCqwSDBBSDV5Y3ndgJNSf9kvfxxy52Hpz1twiT44VLoMtVJVFCVN9ipwS",
  "key20": "pYTbdBjYzR4a4GixJ3DeE9vmF2e7avFSoj1ZXUyC1dhzw7jYoa3A56B7Nd9z866TjPr55DSnPdDnZc4TM7zrLyn",
  "key21": "2k7Z8TC1CrwcdrfPKNtF9FV8VpjcBZ2BN3kW9mJ2PhDN721gp4TSusrLNJAiVwo1oJbAWUyB6U1jBTyFtvCvih7t",
  "key22": "JJfP9tdmy5BhQaTsFPSpvGZVBqWXCPLgATK3zx2e93LPiMqar1r4AGKRQTML4mhZbQKn8jqwvL979i2LvuSaMw5",
  "key23": "4yDVZTNSCcsxQPHGEKUNe6rHLoocwmaYBf2hbsR6NM5NHPY3b1ePciCTH5HpeHaUHvfMcAokgtAcRYu6A2S2bqN8",
  "key24": "2SWJoSRMBnWUn7jjA8iisXyEMUZBB1FK3smji1bu5UXtjg6CCXFDq3B3Fm1bVwVdiWmY783eHk9tGC8eworEfn3j",
  "key25": "2z2XjaqLTQUXdPmk11CCMfDDdx3SX61WixCw4zQZre5R95knZCdwn1pf1cbrMQkTFk84CmCm94abxWH4ALBxmu4F",
  "key26": "5nSuLcPaXvsoLMedAYdJbbVFaJo96weq9EZ7r8uKNgAzthRbxV5YhGe5wxjRjFees3yDc1TiK7YbKTns1UhLZbUQ",
  "key27": "4AxUBgSAQXt1mzXxLAbVfMexaMnPvnEcXB2oK46tqw1HjEYHgcBx27XNSBRUtB6PGkgvn2hBMWA7nhMYa2aW1nHh",
  "key28": "98vmkceknb4JLGCPYSJMzSmbaQsftxbNDfWyDFavHzvF5G6qvgjLjnNj39wackvV8BG7Hz5KDJpaVU4DpriqNYu",
  "key29": "5EoXLPJVQCnwX3pvYEXrAKAAMHsiUyMtTQrgeZxfk2gNGVL9Y4o56XbrUht6FX3uEHgzTZEmYYZKc4LH7hesUyq"
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
