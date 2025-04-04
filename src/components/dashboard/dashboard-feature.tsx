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
    "4SDoeAjDACS7V4QhLNmuFjkhxdY9t1Wbu8jEj95YjLG2dWaYEoG1cbn7QNXZ1D23DqqGBbZyqQKL9Hh7StYtS6tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3HgpQXA8QaTbtyiBCJCSkfFKJUQJQ2TNruVcawNJXbmQyPf1us1mZCKL6TJJQRtYYHjM6T6Z7MPkvyxTPcZuHH",
  "key1": "5bQ9V2tbVbnxWrWLP9gmyVFJg9YyXxgTvWWpa1JCRYW43WRon6ehgDoSYkhXGdWcFAdnAYpNWXxWTkkt3QE663kS",
  "key2": "39v7h7vD17qVQ62BNzDPmsDrQr1Hv5pzBpFXZxqpdBFQo4NLzEWt9z9sonSCp7AM5UqTgwry1hQ9tongCprcUs1f",
  "key3": "3bv66K6Xr1QUcDKTYqC9qqFPD9rRLcjS4sBYniUTdF3HefCzoUSP8pk7z31QEwSVnhwDxB8o9ZMWsactcwQer3W8",
  "key4": "5ChvoCwZ898DCysKppMVDDV4i6q7bhygLRfN6rsAFFntJC3NXomN3yLy5M3nSFH4LCAMaWApV9Umn7vYYEcG8i2P",
  "key5": "3Vpdj5jWKF828ehNAXYUsMxqvHhK9XMoVer7V4SQwdSmA6y4om6qVXVDhVrzFsGMEDigoKdQAQiuPZHnDvWpsQAU",
  "key6": "2ZdPpjsuRnukLEHEvPJjAAL3AD8fJoF7XfbdoaVSsbGQ82z2PvKgrBLvWofftT79FaCBXiiqwNJktGMRdkEVWu7C",
  "key7": "2KC2EFA9GRg2j5scECnnKBKkL5JTtsJB7cm9WUAQCULn8YZVN5J1LLivFwsryrxDxL5ykBexeyrPnX69DpqTnWJ6",
  "key8": "urH7u2VuyeNwV1padJ7Tm7T24zTyKS9iFDLRrY3BD5dBiDjTaKDVrzmTQL79y8XUzRBp2Jwq1sCcism3w81L8mn",
  "key9": "4CCdnErc8WDiPTGXSHESg357Z4CnyE7H8sF8YFiNpjEd2kzZ9sRZ43nLx8aAzBmTvBimFABGiQRFik6Lr1Tvyovz",
  "key10": "4CmX7VDTLPbwHp3J12XNuqs1UhdD98DyTmE2gTJcKLXxCDUK17UaS4g86FpcQ9RvamRHyhqphF7ox1KQAhGkxSRb",
  "key11": "29BxffcneN6ndnK8LaZMLdH2ohdc2ufuz9ykSYUKc1d53ZHu3DHyiHy1cjAjihNfVgjuA49CxruQQxe8xJo4Bg9j",
  "key12": "3MQA5xJZ9FViaU7AEWcMQfuJ2rCGGahG9kck1jhGnjFcKYggbQgkp8Y2TbNQ6TAZTNoBHTHYdBiZPAFGnkM7Yy53",
  "key13": "3Y2jVygybPzNp2Pe2scvTLQo4LcCb6GLUakoBCW3xSaDeZ7Nds2Rpunu3V84V2Ae7Y7Nfujw5Cy94de2XEmmrhPW",
  "key14": "2GCiTVs4hzwZuoPuD8MeS61uKFcTpieFAfTkxYstwdrwGuaRPvYbepr5hYCZPJbh58XQRAeR6FGQQCJbnq3MKfXY",
  "key15": "3PxxZy4SH2uTi9VRjUhTGEuvUf7vMnsSBBhzNem1vR13Seczdsos6zV2ZYQh3b3wTewg3A2nkivCdW3Tp51ZfUyz",
  "key16": "3q89Pfw4wUnf2TaDhNtUPNybWeJ6XAASYChTdNiTuAr72FnUL4Acrrmxf4a4TwCjRCtwq7bvDKucoj1PrbnBrPku",
  "key17": "4xTVNumSLmvjfJ3SrUJTGNJoV9JumYzHuTN1tbrNGpCWFjsMMc4bndeFmq2X7Vg6JKAZU6ZzkG3ZzmqBoznoSMni",
  "key18": "2nZU6B8513zUAvJnLLEaRprZ6hMty7uamJCUTvzVZuV6zVNtJhZq3fhiuUbGKJDbJ1CikscacXorbStLpsFaS1fZ",
  "key19": "3UZi8o4VvtVuSSuUKyiGn8pXZamimEdFefXgB83BsXh6AMSu8scuCgy3hJLbKRW1sdT4KpTESDTtJRDJoSXDAcZZ",
  "key20": "2ojuW6S7vMBS3AvXn4kxzJ7ygwkXv8oKnFt51bHE19v3NYzsWtQTEcsCjUWMpnYZNwEeJ32hJkALMJ5M94wB3aCM",
  "key21": "33eCVsU8TNsBUvP7vCT5PJLTTzQRFwk8t7UeyRx6755J2cBLMdHbt1PiatABa1PTSADTidpyi29oeVxJnpjC4kYa",
  "key22": "5G7A6mX1ueHstmPTrYyN7U9quf4BwryNrMqN18qSYUsFAe8Pfp9oZb2kifJWE7jKHYqsuR4Dmeu8VnkmvSuohymN",
  "key23": "4kh4RxvnJpWSC1UXXY84agd5VwcPXQPwKM3XmB98pPYUP1d91gvM34uxS2BqBGDV9sgvMiXzCcXVAttVoWRjhE2w",
  "key24": "5tbufP3XEqbnAZCmqKAxnAiQwxYHDGHoaPJbHTLFffod3c2M8HNwB4x3v4iLdQsRxbbzbpr5jfo1gezLFuTn5Qqy",
  "key25": "tARdJu5agNXyViWHjbk6XEDenxvSEq4ufmkwC6xzLHhKL5NhR4qSH2QzVRX3vi3PuYwG2N33xEtLMB2mcdcUUzR",
  "key26": "5PBLpn2Rf7SsqxTKtbzoH1gTsGqUc8cwqY1QzHR1ar3YPkRUHVavADC9LiVBQKB27Kjd3RdpVePQCF1VA4BBdhiN",
  "key27": "2BGnBAHbhk82RNGxYqDPXeC6Bqe9T5NGvaEkew2Hsbachh7HiijXMb7QusLGBu9BYpaVngAsKkr6q8QnZi843DWN",
  "key28": "4XEkNUsVGyzLGhkxjL8RYjtbPASHAimKVmXY8uiUaBZKSpLUZq82EQpmuVrnTUM3zaHduT7Yzz6EzkLnThq41TG5",
  "key29": "2U3QjGKqqEmYWWkw3HYZx7sorwqyMD7md4HqmskMyuN3m1EpY7nSMv7g7EhGc95cmDebuz1kAsiiF3eT4GqXZoE",
  "key30": "5WR9JPuF1bKHkFfpqEzukCdup2VCiskQovwJorfWeBFpdezThnHdi1qyUMPR5NUgJS942ekX4YjwbMLWzCaw5BUQ",
  "key31": "4RFqhvd5KFiGPqiusxM8B5S1RDqKmpP1521LCBLQXEAKeyZHXhhgEomKQbbMtxyc91Q4wZijYphGA2wKWpxUXfEb",
  "key32": "4Aa85CjAXcxdNUkiTR6eGhMPHsY8DWRYQX7Tn3V6ZdHfHvTkUU6c7QG1CZ7xQkujpK2wtT9NaJTR4zp49mpNe9fD",
  "key33": "GcwQjiMMctkeCzXNmeD8wMFGDLS7tqyZ8ffsRfNfbXVYZDmw3bX7Vtt8NLUaBrSewyvpqG9sHNCaemQPegs2XVN",
  "key34": "5fMHhvqxDmxnC5Q7EQRNH31oe3eawc1ScCbynDUmxbbnbP9GqhMAU87Cuj9WS5Hz1g7wQDLmVzfxmhJMW8erQ7N1",
  "key35": "5TWz3rstRAWFGvMMmd7XQA6Ynr197x7GxFnvwNVwM89VVSRFsBdxfuL1KcfJAi6zhw6QuHi886kcAzYNvifVMGzo",
  "key36": "4KpVGsZkKsmWiSdVNL8CoAukXXazJqgRvLc5awddEB56Rx1sK4RNdgkVYLQgFpQSFFNocJQ5B75zfaLm9xhhFka9"
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
