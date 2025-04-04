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
    "nyK7peNtaj9CUophmaR7DfxeFQPaxcMkiEKcsxvqRAf2a1CjphZv7qNoRTkzuLhx61WVDwZyvUE6qiPtrf73CbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHzdVoWQ3YqsmRLfeevDBWNR52wLGy2wKMLDEAD5EXtCYH7ULZzaFANYN62zvF3v6KSqNXKoazpNFm7BrVJkpin",
  "key1": "5fmfAjUwDYTdLdF3eQW8d1JXWA5ucy9HLdHKCBVfDyXxW6EtRWCRWuKQab45bQcaxBGug1nC3Ghhhrzn7RjWEbjf",
  "key2": "5wMukK8gPvYYbae33VmcSKoU6Y6Q4jv8y75ZtF6Qpqut3pbQmrxtFkKwrDvinfWZCK1Zfb5RWctyb9PKNYSRnuYT",
  "key3": "38raEe4j1sVqoi8pzQoEohoLezWLqEo4xELVzdZHMeGDJuiA6hk3uH2cWLLLBg532KawY6GessNasK9YQMWU66Pt",
  "key4": "4MSaTTBNnTkrRX3RPM7KY6p3VPdq8k3aQb6hD6YJxahybDdZH7KZCQNVksYZuhdxk6Q42DEK7FbPTZ3ZNj455xkp",
  "key5": "SfGbWWbhwdmD5DjhfJ7yw6A7AjG3dUGA29RgAgqZwk3FXxFxKuPMET8T8vNVgoLRfuRSpRDeWfYriEkow88RMRT",
  "key6": "3xLEK5eXeYGm9BpwfWdiQWrxz9qRU6g4HQStmi76VxYfRvgUG5KLMc9pmaGEryjtjeNZgF3HneT1LeyjX6vvpwfv",
  "key7": "5eQ76HkyMnCP3GiXzmTtYr49XJe5GC5XyynksP48Bdj41qaTu6D83PqaMZyT7tF6ow83Hj5apHFXBoftQpNWEKbJ",
  "key8": "2bwg3hp8Ppk5voHyTvqqEkPnv2FM377LYhP42rCtuLmiUuJKNDktqoctdAF8vXk461MFTffWGXUCwpr24eb16qUc",
  "key9": "jfntsLUJB6zFfKfNq45T2rWgTBkJ5rGE67am5Kf5qZtQvkZWfeYpWM3q1o2GVDpDcE3AyxUZ6YmH2CSJZFmgcJz",
  "key10": "2fkbYvpL96zoxJxgxgTaawMK6GTsC3rhdUCCMhragzZYeuvv9UfHswgKEXJ36kfidqpY5bx2dXCGLz3NyiT96wko",
  "key11": "3xERjwwBmXyrKnpx3vVgRVAj3ndaKMzc52vxKYGyFwDKzAkkZT14sKjGtaBBQYSCN32xSmvHMfjBtCchZBFeUHDG",
  "key12": "2RJ1bPj6r5Y7MSR7nqRvztE6r4zuTyS3j3rTBct9X9sPdenvn831t2SMvGyrq9JVZQGgyhHKu7KnacNAJuKiKFe9",
  "key13": "4Yr4fgDSTwe3oHav3BRgTu9xS65yCC921GnxZz3uVbH88jkWy4TPA1y6cN5Z15GR6tQrfJ1Cfvf3knyYgovhfM2h",
  "key14": "txUk9MRD1yFq8ARfhTfMQVyyxiGUyozgN5Qkya2FRvDBT4QAyvxkC3qC3Xy6LTwdgV4qxuzdvsgsuwgJnqrP5ws",
  "key15": "4inrfCAxJvtcak9Bq8Jvn1SVK5sVsTr1aUpnnp6yg88hfBbhdjZmRGdJTaW2BxHp9j7ph8i7qKUBsnC8nXui7PyY",
  "key16": "4NdJEpCoxRQ22bhwvtvEXhJjzbtpNM26hZubv7u7Cyq4NzUwwM9FbVJNFGkoLyzuKKd3wfnD7FTD4CW3UFkwoS5W",
  "key17": "37r4LbfcCTHBHg9hFeaYe8S7hLqWb3gtGbBCvx9PtCFMyB4rsqrNWMxzmJDwCgmcjXjsjBhn7fwyL7Rho7KQdtNg",
  "key18": "2GWQaWvuXJb2RjGXhB6ar8vhMoTDD1soXs3VUywVdh5f4WKrAsSoT9YquAiEfWnYr4YLsWW6hBEuGW1R6Uq262Li",
  "key19": "4xs8iMSmLdUkuxHRnkhDF4hkSS711ncBdmieZExEhDGJvpHK6Vf4wnKBP6f53HaAWDv4xtnrVwa96aSpUiY8Lgdh",
  "key20": "2RQz2MeJpM1MyT9mgpFdUoW7ZUoTGryV27xiJdpQyCSpK3y9hP6M8qNny2UjYUVaYrQDeL2FaRNNeLtBTAv5ZJGp",
  "key21": "2z421e2ntpgJibiqdfeKMbxQKT8GaYFCQqZ9WFKjRP3zbRKp9n71Frydf2sZem2SXEN9Yrbsb7TfghMFSE6Ha1dt",
  "key22": "mbaJteYwtoCWAPY4Pujc4xWkrikSuVGdCkgwKBgzqA5oGVBoX113a4ZjTo5Z3RUZXCdr9y99APFBYPDtVDspFeN",
  "key23": "2JKeWKvtfQQczXD4iDgnQkjG8brNhoq261A8HetiqFBmJkiznssbqG79UyCpLcUYfdrKXKiSX7C4vVrXsDBDLE9y",
  "key24": "28MC7fnd5VCeeiVgzV8efWAqWKPJPcsn8PrGTizw65Pq1jbSpxDwTVmkzvYeSqaJ2TeuQUm4venrmkhePkWP1vh9",
  "key25": "3W5veAKUpeegjGhQtjGSc3qZB1xCF9U3JfHncSShFhtb6rDfitESScJvqDcbDmbUaz2VCMwQJHkXage3mwxqpr2n",
  "key26": "4fxa5Rs6R86gHjr82vMpbUux5QgCNgNNWCz61vp84VHqusR64tZpPpniAJvqkktLNowXhbYqru6EsPzubfrAzjwZ",
  "key27": "2ohLaey9mMvQGwSR2ZdjTSaN3cTK4CD1VnWoqjoK58yrqC8zfTiKyRdkZ1z4phKSmU9VzfrRtQ68Tk2nPx3RPpYF"
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
