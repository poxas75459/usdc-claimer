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
    "3tZe53QAKfaF5ueRchtrYVk8bx7xNTZEP5CtpGTA6SNZi2dABe51hYs5dkL6Yka3TmhMGZ7Bi2a3ceZJPXi9uECZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQbuF7LLmD5Mhxbp164U3mPesp2huPpyfYs2J2RC5fJyJGx3RGn9bPFV8scYYwzaAxo9ekvxeteiw6NcBF4qLZv",
  "key1": "4r66juiSqVMruELm5ThH6MAtdA8R8jEYTfigefveZ7EVauaZotkzKk3RHj6F8EVUpPosQURUnDmRYSPFdQbCfkSn",
  "key2": "4vMSwkKbRwu47yb4xuvubFk7DxRWJXtwQqrPqwLNa958U7UGfLPxZ4PVyPb2RhdwuYFDuJgQJLFN9V9Ro8SVQRfm",
  "key3": "2kxxQyEJN1nyBz5i76jensuPxC7qgWueJTc3WzNNQAJJuQgTrEz6KWerwnd3XKPysh4vm4mYAWoszRkFMJxfBgMX",
  "key4": "3j2oSuktdzvEQ6TFd876W7Wy7UjHYERwjHPYLGRBgmMX3ELHfprAh4avpyWiriQTiye4SXuHRev4hjLbB7cqbYg6",
  "key5": "3k2auqVk5g3NcXhB5STQEWPYd8fiKa58sEx3Mtuzs8ZtzkDQRiiAbfPrupftwphXcwYPjmrzCLATQHuif1sdYeBw",
  "key6": "4uVtkQF4mnMajdQnkWkhzfzHhTn5CV5LKd434UVaatwpFpqgFUJ69h5ikc1n5fYbL3Jj61T8hVoZobHXMek7kPdZ",
  "key7": "RBDXYopdDbch7xhQYUzu7xSktNwC3xajAYmPGQJcgBsD4qDFRx1TtBwx2s2eMDQqe8rz6f5ZAjR36d1PGLbFyGD",
  "key8": "5YtUASuaD9d8mjJBP76jPJtuXeuiP8q8ugocYDNkTvwwJ49cysxrcJJntk1LjjvktchUvZwMkGbgphpDAchEHRGV",
  "key9": "2HqQXPHYWLjqpzkZR9dmRC5Jm7gi9hCsteuGrL1fyxzrUkSYi4S46SKXXdncCMtXk59Dpgxa2DQHYarggQJ2frCV",
  "key10": "3hmA3WEmZPeSYADQ8hySXSACi3eFvoYXgFikLB9mXRHLJ56GzrzAjhPaVVC5PXoeRWdgvmFZxnPe2VqaoQhwRAgc",
  "key11": "2TZtvwKRH5uZL42ZAjRiRiXvwh1ACh1gDymfLPR9pjxffFP7PLawzXMErRBd7bD11uAVVn9Q6josL8QJy96SErPt",
  "key12": "2MvBbhTNm9RavyXSYeXLYqsc43PA4wVEQRP6Crv6EsfF85yLG8epKZDyvJVSg32yaQBgfM5mDhEFXavoDUzxtYdJ",
  "key13": "2m3PkGX8J29sXAzdzr7thjgG9fMuZXjgnX42D1GFGqwdJ75C7an12xtKLtgKyMcNtHGKBZwhSqHYiie4MJTZQpFJ",
  "key14": "fsYVBeGeMjX9QPc8xBvMvME434rxw5TSoy8y9NQWyEM4gBS825Q7e6XYnNtTrk4iAmf2F7hAFWP5KuDHsChBUDR",
  "key15": "48zXMZzARVCbRA2e7LSfo2ricFHsxSyzCvzXQedePrZFe61ysvTPxnUUdpurvWidFWTRSxBHz8cMZD3wHmPuaRV9",
  "key16": "JpBKkxDfZ8PHC87QLC2z9S77Tfz6mzpGBS6uXyW1nHNefrqg6C1A2xdHQGK9QxsSZGMwu8g2narTVQuFwFjJmHz",
  "key17": "3t5bgm3pKAL1qSXYcepwmgT3YywcchVd8QnHKGJhYRpjUxLrtCsubfYsqPmhRPL2HfrKzq7P8C96rFATg5aaRtfJ",
  "key18": "pyNLpV8bv9Qf3NdKGKVyKSCGb3WebRH1fAeyWosbbpgh3LvTpBZksT3LXXraBW9B45NjapEdxcxCVNCFeLhZkY6",
  "key19": "2Bd5bEWadNmBFsQHK5cQ4o25BU2iiNfAms2G5QiaXoHCXd5V4TeEfn3irNJirxLhLTty6YqGTYFJ28sYYX7isopv",
  "key20": "2RexW78WmSMvutSPD6xxpHV8au68ffDYocwaKZvveURAJZWAcX9WBJoR88Kf93c4FMRXYsyGUV1RYHRQUWSoZVFG",
  "key21": "5Fj9fVw376GqS1p7mCmkKvd2V3BUhvy4SPP8EScooWp68zBbctan24kVSD8i1s7L5JZhaxZrBHvMeUFEURm7Jqeo",
  "key22": "5WhrDydJVSHLxESWEmvThNkf4VPV1HeC37VUfziuQLd6qWX4SBgM5nshrk8NmR2HjqQkN1kbdd9kHZCyN32b2xkQ",
  "key23": "5j7BRohJMK69Hs9ifWWk73uNJ94oSNQEqTxNadsqQGsCdg6TWJCVgbjYahrktTBmSanBQoGwTcgd8nnHgnQEXNro",
  "key24": "3uAUx6fdHB5eqRCiCcckwLK2bCz3y8BL6sc5a7mQaMkAT1PYDCfZfNe54RwS3fRbs4tVW768e2kBCN9HsBVSdg3c",
  "key25": "29Z2C7oEcvFdn26F788jeQGswgB4AWFT6dz9sMA8hePeefbnfPKyyp9kzF9fXExvKQeb1e1DfsKbqV7e9qmgmFLh",
  "key26": "2dkowKNALCbbHL2ZqKz2EA72141Kvf7G3oq6yksdPY5TFyrX3g183J1ZmWaAVT3R6SZXaxFQwzjXo967unH2VJ6w",
  "key27": "5xbz5jEntsmzryjnHKEKwrhKPEsd1i1inmn8fqzKMTCqsUe2fsFWLRBrVprxbjE1FvdVNmkSwXXSR1xkixNzXdL1",
  "key28": "xH9HLJMo7tCKiM8CEUX1Gk4eXj3vqV5WUo6GefxvyfaRmWWsjhgz9Ht5QJ8xRkAf7k8SVUBF6E8vHTk1JZdzPCD",
  "key29": "31Bop2rhn2jMcEnB4Puwr5DKebPuCdXBu5oUCwqXBsy15nsvAkRQpa1qd3P8NGARMhFTbCyj6Tkio2UqJfy15HgF"
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
