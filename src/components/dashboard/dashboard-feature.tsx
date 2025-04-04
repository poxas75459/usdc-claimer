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
    "49oQgaZDdMuQQTdjQpfL2A43PJjUMCA5UfzH7vbnrhLL7XVkgDMGDBZRCbQ3kV7vDEnpgQFgzZFVZrNy5LzpsQy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DKhsaiiV1ncKywcxuuSpVqPfTDLGMP4LW51snJAX4VCCAAUQGkP2MXf9LoJGMD1UzJBaYLiKSRqXNLrYi4k59k",
  "key1": "2dvw49vBe7toi3isE8y3aTrapfUWWEyA96BKTpnRG2Q2eT1rgYFyxp3HsY3iZR9rXbSUsESmZmUD5gaDyBQkuoY9",
  "key2": "b7Q8aL4akS813KRC9uRWx4AbdZJSmeJfsEAiDz53hwsbAozWKURSHVNjRKp1o4TCTZidd11LyVvqZp9eVy9Hfdc",
  "key3": "2EZ9KD4RygwtCYZ7NH9kbqs7J1gdjAwnNosQe5d3wpDmSQxdeTQb19Ud7r79hA3YHvTph9c8hPYvuAGvpRZnpbTa",
  "key4": "57PToWGAexPfU9NDHu1pGFdqL1TXprWur8qm8m21AbWK7xxbS4FwueTtMogp4Xitfu2BL77S4wseHWNTeVjmENUj",
  "key5": "TpG4zJSWvjocQyk93JPqxrzNwGUPJXR4gFJmM4Tuvsn3KAyJvN3BQ7RA6615vA6HScRXYScYnd9VB7bn6UQdJn5",
  "key6": "XeKRBe5zUGVs1HJx8BDmtZZ4KCmVcCAPzhhGax93JXKjUS5ZPYxatPSgBpmF9KYLk2jZdaNb9WLLvHSaZfyxB9e",
  "key7": "15eqphLtDYBmKoyFe525ZVD1JeePBknvz5GXBGDbyXEHDSpWTgSFLySAmT3KFwPbGJ34mF7BopXHhL65WxQbSvg",
  "key8": "5MVWL3tiFY7bTgTSMNKkH6scpPfDMPnBSo21LP2jtvVXEkKgnaUk3Fs5YjNQzskTD8P53EjZotCbYqnaQPCZTKKN",
  "key9": "3CpADN2zEr5tRBzfSGZ4tKN2UdzvTYc4r42fJqouB3pTgnuUCP8ckX38md3uMfdSXFZnEnyFSiweiWPtwDid3SXY",
  "key10": "2HBsZcuocpCoGjm3gvsdupwb2ckTtxyiLSYBqWPWEMPp4sAiFB3LWPJUBrHHAmzyNqLrdFCz8osrAiRqUX4TyhxX",
  "key11": "TfpwyHXwBHpMZaaWSTPAN7U22gTWH2BTyMDg4VYyhhBLKgefrf7xJ5NAvce5Bnmt96KnBH85FErCwoZ1ydbmiCP",
  "key12": "cTCbXSXhwsfp9ecbKz28n322qhskoV8UHHURTcrfPG4Zhrdi3qXdPWXZbxKGJUnTDwHqU8kS7z3YCx6PnL8Qx3Z",
  "key13": "5DGT295E5uERegJQTJc3mqdnRHzMJ1n9DTPqBhx23D5FPufuBgB3QUcwcWEPZSCa3SDw6RskFdmhP9Pok7EhaRDN",
  "key14": "2Z1M3nvQWeNTXtRtcFVssGLbzcXwT5x9oWsXHipZMRc8xfJRA2J8mLK4SpeEhrJUdhJ2s1TcwtVP8F3GbhkkotMr",
  "key15": "3NjUJ3Q8hNVL1birtySwH273qgci8nhuHsUiDM4p9AvMJyypi2cnhTaUcjYRbM4T38HjnbkHZueeN39kwC8f7C1k",
  "key16": "Z8iiXEW7kHj23ZzgQT1GvHPTJxWZLv41awfXc7tSjcCct9v1zGNkk6VVbKTMYNADbEmvDCXA3Ge7KpmppXs9yA9",
  "key17": "497oF8WCfNQ7DhiqhXrjbCPh2rybSJmNyLUMkWFZRua6BxGbVaPSnHFKAkpxARdMgyJwRMKuV9fcPp45umKNu6CG",
  "key18": "2cdUrpExvf8Cd6YQAkRng8UETHwRgivVqVYLcZQ3rrmVYenbCBhn1iErziqvrDUoLPCY2TsrUqLtFiqhWiPvWFm4",
  "key19": "5P3h9q4M2AiPALxkJqXr1PisbnpbRJYarh3YJwGPbhh4GTmudHmUgAcitzvuEDqxQNY2NVTogHj5gySQ2YfNLpNq",
  "key20": "26ATJcSmQPFDYpBGvwv2tuDQRq3EDc96J8oh3ADF8RxbGFkLMAMAWsMWXu5svizyTpe41Q5j1DVxHANWR7nqErPf",
  "key21": "3RgaWT9ZDSx6JPohFLU2vVsZUG87MVkmThCu5mTHWXsdgmvcdUWebBidkmwnqRsU4XCA2viGuTiWEhMXBVG2fUtu",
  "key22": "4JkgE1T8ETpKH8CRw3TFMfYM5xASCjsti738vSF6KUtYxMZt78UPyWrkActYFUftNgqf1xLtmEGmogXzcwa9ws76",
  "key23": "5kTJ8C9SMENaNwQHQ1tAHN4vgiUCbMG1fqjyuAvKUnDxU5WCTkB4Un3F7e8uWBuXyPX58VddqwPHUT8ycgh2Px11",
  "key24": "5haZNvfia9EN9THCdspGJvSNozwqJpRMVXoLp8KmZqZNVRkJEiPgBBKhgSvv5wU1mtU4dfDwmWTREsP4wgQoEf6w"
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
