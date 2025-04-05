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
    "5pqYJvrkXGMjhZZBFFd91KvQaJzu8AaPC8m2dPEssmT8iBHk66SAUFF9Mfh8oBu1LQcHQPJiSL9XbdEbTTjVmSK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpTg5oikGVpjv4uC1bK3ntF1t3z1NriwDqBsYVzsUz2TQEFsc67Po4nWRsU4mBbmVViG43D4AroHTh7gZc36Lhs",
  "key1": "5s9saYcYqAqk6WFAA2JGebGKTG1tLVM2EBwXtShVeXjmgmDrn79PxNbBJNMRR3sKF5SANU5X7DiyDViYCH1YGivo",
  "key2": "3xgQ1neBYqVjj7nENqYMVKe3VCdQw1wJ78wVjF2UBk1j7Z64xZj1iKAePUtueGNb91NUkX7uACXVZoXNTpfT4xFc",
  "key3": "Y8isVuyEZAkfeUxXt7fmvCr3EYPYtAdL29XNPc7qew231E9EE8apTV5B4Av3iJtrzr2zNfoBSsYzqRXgCRGk35Q",
  "key4": "2fUGsh2HMyc72tDjcdz8Q6A5q7pUeRcEx14de8JkeRDCuWEXXKofuTQeSPrvf7w9XmGb9CxzUSPyZK6po9VwpG8g",
  "key5": "3HFndmftcu5DL2m8Skb7SpgATbJ49fR5CQXDkwx7HuCBk8y34SEpZSYBMLCEoABC5hpRfquymBkCbwZhPC4Peeu3",
  "key6": "2SvCPb2HCz9CmuvbLjGwBb2d8JjWG3raHVZs4CizxeHW7NETtU9FcdAXYKHF1jipdfgkPFLGGVAGhL49p3C7p7ve",
  "key7": "2DCZTmmMhXaBLUr7aRTFmutL7zGeBWawhVP1QrZXDAhsWmdPUhwBALuqRXmNuKEPnTu332XRJr2dUPxy4KN3VwKN",
  "key8": "3mXTMczncRFHY8PGqh5ojCgBPAqgEoV6yZ2hurkD5916SdURKo2vYUVYDFSJqMYuFAmzjBZQLGVbZs3BgKR1XLLp",
  "key9": "3W644oozCVPM94JcLZqy2AZvs9ZV1diGpExomanwPEQ3BW82PBLj5pmBstjaDJPi6MeSfxHchsAUrUkHANzFzFNn",
  "key10": "525E6LTUM6Lt3YKmpTMZWG7ka7JbQqDF4ztDrg3FwewNzae9LnJc6UrEhzg9ocMUkUohYz2HJQsYVu1opfhyV8vT",
  "key11": "44MXfnE5M7K71wBVvok5ZKbhVMwqZwGFu6SRJAem1jwrVjRgshJcbi84SHapPczLR952QoafYHNoUNxrzFhtx3NJ",
  "key12": "4peACSSr7bvrdsJPhwkB7tmQMQssrUhMSEbK1bMzqGYZPjN1TJUYxGyn9g5tAHDmMJ1PMQwfooRc19VctYPE7kXu",
  "key13": "2udnhzYnR4pb3cKKFqLnyKzJKnk3XEz1vRxBc8SVfMbwqzUR9yqFYwSXVRA8qxihjpdgtKXDS7RCF7nTFr6s2BtK",
  "key14": "3Bu7pHgqXiWuuTwzic2d8E3bTk1QnfTMg1Z2pY9QBeM8nijg49BVsN58Xthd9h9ACRSku6QxxV5CBtHhVGmGfiCe",
  "key15": "3reEtX4rt2HRmGpYL16buTeTPSXFbACHoyD6SDHWMWB7XU42m52ZMYQ3xwWJYwNrdrSzumDWZNhKSQEZ7SmtmmPk",
  "key16": "5hYGb19HrQvxGp4B3Jhqo2bfn3EaMJvfm4ac7K8fu7iexN9Dmm2AFy7Lnr24AxJmUQ4SLvgwB4tiuQCcmSCpZRx3",
  "key17": "4sJxFEPWXDmjfdDfB87bPcHzUi7d9rGQn5SPfu1BFkGLp18uP3V6nxrexmEABmB41xcSLU6GCxBLMVgrYCmt2D9d",
  "key18": "5dUah83fsFVQosQY84Fcp4ACe9PEWub2fGJaC17Cdib2rf76U6hRc66j9V7obK5VMEavxDqiNr7zeFkPvDFTREKR",
  "key19": "4G2vYgksuqer67cAxHtsxjLTbn6HZj2k728exurKgnUsZtbam3n2emDxbQV6cfWEWg7vFFRLXmnjdJBseD8MukoK",
  "key20": "4VBDmgkyfuBCZTczYwE7Kj4xsJbdocddjsv1WX18eAsKAwtfMBJVvC33ERwNo6Ny6qDE6sNkvgtX2g24ZooFqDBu",
  "key21": "54rnsj2orzMLMDtLDpw56kgjD3t1WHzjtcrNg4WW9RLRzm6aMsECHxBzUaZUubwgQc6BhXWPRSyHUHFq4AehSPfz",
  "key22": "xnV2L7EGpBJAWd33cGZxLya3BriRTA6fwWFcDxdGcHDcVzqpU9ZUPASj2H1SH4UgWr4LxTuEtAgfmxNLQRc8iWC",
  "key23": "3C2KthGq6qmvJNH5518BosSpkLMPCE4MLw2XSiVbrL3kq6bMZzHVRiCNti3H2g6FHmCbUyueZRh8zDHhsrjrKnin",
  "key24": "brrbjFRFeqrWVbecDcZSnGYvy65niZswDoB3i68VQgMWgugNVxY5Cj4gF8hLKXvLrHo9pCm2tMkCmyM1cZPoyeQ",
  "key25": "4S3a6QENxG81G4Pgnhr6f1UPU7eWzmbMmLp1yfuJtSf8e9o1GpnErbrNu3dGfZRVCYYwfQFzzi4dkGCbNybHMzyn"
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
