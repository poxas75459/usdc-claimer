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
    "2JZn8qo1ZNWwHqUGVp6NdLMYv9owxosEvjZmx9jmsrk2Eea99BLtwdP7ejzkPvtYsCuCSzaXG8brvtmrVAFemMVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BqmY6CJkn18LnXfjWku9ELYXYdWxgpxTkMDNiJKAqshWoY3qN56S53zP2fRj4bsS43QmHL3DVJvtwAvX2Uck9LH",
  "key1": "4LffeGduEkHaz33nXfuLPP3tZZkLqNXkYpYXqxs38HyUBxDadFoDX2wWCUAphQTkU4WJw7GACn33E4p1L7mmryUA",
  "key2": "4WB1LW1UrhzWApzcPV6itJumc2NwWy1hfPtXy7meh4ipsvSKXKpiKaJrHxTRhMn7oKCKphUrykFJe1P5XgGhE4PT",
  "key3": "5Nie1GjyYFP4YpvaCrjkduXU2PuqBbuzAU4zpN59puLrdNtvmiB81riK9CJXwyiNs6V1LXHsYCEgGwYF371puj5",
  "key4": "5FF7SzSPqEFv7QQ6g4XLhdzgMy211UNa5Z9BFUAGQEDXvmXSvB5fyUnvHqxJNYHtHBJyAJrNp7L4YysrXJBuQk2a",
  "key5": "2xQ5sGfg6AXopsMcDB5EK2AaDBLU1fbwFZQhS1tqBzx1EbFPdsnPyKFTY8VPZNPDYPZg7UtTLWG6ohviU7h5qtMt",
  "key6": "4JsK9BvBkVVAcHcAErqW5FnbuKmHPUQbWQc1EoSdU26eFCDqPBjUc7MnXChg6svheYWe4nFyezkG7Sd2TpknFw4Y",
  "key7": "54gSFKEXbdyvuk3DW7WrPKFyVmhPL6GmdWatfPcursu5N3cuW6xJtYSeczLKYL3JCTCwMzKrK77heHVRqzqWCUTo",
  "key8": "2p3UFUm3sRX6Jz2Z5U2aJPc79ZesnCdyGKVnZ4Pzia9wNsMQnd6yzGS9axrXpMpGgzN29tUcazLnypuC2aXkuwbq",
  "key9": "4phU7t66Ny9B7hT1vn5mPPypHC4gYHHrVoXrpqdttdt124i4CFkASBFCuP2ok2294c7d3pCR3jiSx9ySay3rmA8G",
  "key10": "2PayVjRamWE9aShbXejUhAvzGCE2jGDQpMCqFixKJeGQWv59cQCTjWx464greDBheFwjQm5wHe9e25TTe1EoessQ",
  "key11": "39j4VSyjCV7Ye2oPduLeYqoF5uHd9M4MJDEHJ9UynTpts6QZC88AjcqZ4aSV2veSH5YLd19ywckQ1bBqPVEtu453",
  "key12": "2cKRdTDCF7z36qDAHG7ikZCtLvau9uzhpi7QPZzEENNDRZzQ3LwjtdfMtqPYDSJ8jAQYRcaqHFv5VnNFx178a3mm",
  "key13": "5BiatMAwLMi2RmQQBpNNXuDPNyDaBMArtyKFok9mF7aCm9vQJbjRXRDJQMVjmZCnQoLE7RELSiATJqt1bmSUEtJt",
  "key14": "bBwK2HuDZyrSohsTQFzMnn11v774QoAPzbBAEcKgEGFwVsaKgDV3RUpMA7efHon5vYKG1iePBNMRLSKSgK7S95E",
  "key15": "5JeY4ygDzgATkGramf5KWG4EkDGJUYHWovmZLpVVrLUo13CndsGoiKGUzNmAov7FiL6jKwgsQt8Cdt7xYjarBs7o",
  "key16": "4D3Aaq1bixMcQwSWeXp3Cyh7pXLhg5CuRbnCfw8zV9Y7N3Xm9w9mZ3VtmwNko13GgEUz2faKpy4o1jeiCkg4AJoL",
  "key17": "Xg5MTLgeskgvDqpgQGoRXMVB3QAXX5oRypMH2mRVMg4W42GsJT8oLQHuCwuu3Hvb15VgMY3N1caHcr8VL4pkCQn",
  "key18": "5VRAq4qaVBiPg7Hax5UrNPL9pEwqe7hWdWMMRo31nwpWUHzC8zFqgHtMXmZehUsPxHRSaoxBBRtbpmdKPsXdAeqq",
  "key19": "3X5jR3CNXq6oihas3ZAVsEqWZ9SChz98RwvWYsZMQwQeAjsS37FhAP3cVPnfaBJU5bPrMbLEHG3pnZeU2E7f7jyQ",
  "key20": "KZNohuvrgFwBv8uLtod7JWEibc1YUiLDP2VANohc7Xb39YmJAZDJpPVASsTqKtVY3ZJcDjXfkAugfH53cA2BZNb",
  "key21": "ZmnfZKKtKhwdcxTkoU1xNudbcGbJ6a7GTnoUdhNBCM6DdRFDK7XM97z8RcTBcDi2VfMpb1z236X3yuP3u9gYjZj",
  "key22": "RkbnaifEsorHf9R2LnNtizaKd6KPJfKUsaVCWRBRfVbARUGTgdZErPqhLaJHjtrAFxc41oGtmwZDF17dQ3CWpQt",
  "key23": "4faiDsW25PYJ2Scctjvq5iPdBCEypyb79pKvaZAHM8aMjPmr4HVUceZ53KaaxADUA7LN8s1FqjqcPh1TdapoR88N",
  "key24": "pXcUZUuqk4mnZbLAkrJwD2oAZ5EcdmXDoXbXB6CyGrmmE7SQBmbxTBg4MPPvxDuTohBScbgEvRLiK4Xr1F5ZhzY",
  "key25": "U1EhTsQX7skXJQVQQEfcH7dQBuoT6QT44Mgz2gxXFbYMmnpF4QD5FH3gTjRmXEUaqCpCjz2HkqFEA5MtMZ36n9U",
  "key26": "5gW9XBJX6wkGTE49ENMG3BdLy9X57spooU5bSomq3EfRdjBsyaCmaQMWaGKpHfsNUXxrejwrBi7XWKVLM9y4JPCw",
  "key27": "57b3xtQe5pDWURnsJbrJshpFsdbzCs5KR2iTLbsNBVcnUFdbsTixabPwWi39TrcnL6Umojw9qZeFDQt4Uu4K4bL5",
  "key28": "2HNAg42H3n2ye47ek9JZKVczB51J6tSawmiBRLNSYZgbhr5GLnABQkTcpBYEFdhK5C6xtLP7csAryBZeJ78nFYqC",
  "key29": "44mn6JXpctaSgZK2x2e3f5KGEfTVEVVR3jK1gc6FSSwRwhsANrAiAZTgRXLKMZvsGFEoGdgJ2WTec8RuBd1k7WTq",
  "key30": "5samhGJq7Rxh6thd7tqGpLGTyDuM7C1Trf3LvBVgq5DTrYDbGBosCe4Na384nA7BfstTWV7yqNens1KsJ4FaMxk8",
  "key31": "c35hAkKpwp95x113CwE3FAoZZ5bVuj8TgdSG3J2P1ymhNDubJKfRzMNJbDm9dsJtWF8YHVAvTbZy1nPVdL9yMVM",
  "key32": "2s4tLn4kAKYDoTp9od4kHLxKhgvEWCKyEjxZzkLR3c2RAAW5mf8fbUKpmQ9ByK8hYFxuBd1cFz3NBsiFbiD3WxNd"
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
