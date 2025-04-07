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
    "4moZfAGzdcfNUxmHbSeTPSDXZfw3Erh1mKfe1FMdfjRSNJLWqaSeaNBgc4ZhSJBSWhaGSicyG9q2NKMFPm9t9MeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsKmxiVCMyP2z277zNdFPx83fRWLF5gmBLfwN2MKc4RnUKeN4vSWGtRMYxRwqvAT1tAU3F7JfRHyS5hpxGKQzZq",
  "key1": "2CP5R7qHoijX4QnBWUh6s9v9ZoKUbEFMtmsLMo53bNV3NKXWoT7QSWWohLB2R2snwQrMxdYQKybzkBUkF5MC1bkh",
  "key2": "3WE7BTs3YnjtggBwAh1msFx5kQuy2u2fCxhHSJPnLSF4AagXtKV1XHCpudtSN4fATiZwBDnUZdmVvEuTgbQBUHHX",
  "key3": "235pq5RW8GivTy7f4UyBwa29gtTKhsgStmHRd5LG5oyvdak6ZH7aafMgf1yMLs5QMsfHrmHPmWhRpFPNAm2YB76R",
  "key4": "2MZ7ok2e4TXqBohRhcgtrzgQxmjypN3UBpTD7NSp2MgM9EzrJvMaTPomn8PmcdgFrJWvPefAApoayEi96KrNVTSN",
  "key5": "253eEvdjUYuFPamNL8Vbww39PM3HEXQFauCstp9N82mDmr5NicKtrg1mL1qb2tvABZDVTATvWFFgEZjxRTPqQhWd",
  "key6": "2Ap9A4VcVJPhNPS7VZdohgmhBSzEERUsb7vG2h7Rj9P8ZtaYDwMfpoZFF51RLxMuRuyjbmRBZ9pcg6dE9Fcmz7EZ",
  "key7": "2DvHvsxkZ4hkZvb4oRthy37d2p6ZuHd4r414infohLr1zxkFJX522F4ePt3xaRtdT3cutUuCWnVosktiVHAaVUAA",
  "key8": "5F7hyN6Kikz4gmQykcUfrRAbyKsaVDsbfKK6Ae3BfwG3qNGvWq4tjpoHyDs4Mys9CX9A7HiWeHErgFm1mUFX65nj",
  "key9": "3ypix779NztE2LhAiVG5p6Sv9NHpDVoVrpqhaxQvgQXskPANGr1aRcRovVSTt7zyVhhULiSLKztBSkJx2RnsU9hG",
  "key10": "49d9MoUWHEvSBSzLGazNmLiKNtWaXt3h3e8aBYLBxHYG5SsnMTZSgQZQpaoWDmZH5RTUpFbuwLvKwQQN3J6rHCJr",
  "key11": "sWTzSnDiHkyG6E7DGdNya9YRFt74RRwCtW4czg1DpKGHoyT2AKfyJHucfjgvdzHPyxGmBD7KB7VtV2vznsMfbhq",
  "key12": "3wAS3rg9GmvHkfRYa821n3Jd6oLseoJBLs9CuMZSD3sei8JVyJ6sMxminUkarsDYFAf4AiYtxATsep3F6xNATERN",
  "key13": "3qmgS92t8QwKJDDojYisLBiARLa6VivQJWU6u7gtXc3VKVbAeYk9EsE3iNEVBUqSaGwQgrEiUvRRn8UB3wxVe9WE",
  "key14": "2DA5Fe355DWoQf2N1wBLT3nqbZq3JeWtJMLxibtqftwHqom9KekEZJs7ZQ8kP1WCvuRpdRsNy2g2xCrYCnKEYrfE",
  "key15": "4CPvhJDaN7hhkgmyaPRFeREWtTB747XvoePZkghnZ24MNQHLBZAfHA4abTuRoNyoeWZBuAMr5kkaFVRaLJmdEire",
  "key16": "3ScUoszbTFH1zE8zuhhQqpoU8KXoucCMVkN2XVjzsSaAUYPpWX5zdK6pVyUgatvKmw5sUTM6NYTJZJgTG7bsfShw",
  "key17": "2WnXXb7GPVVDZUffhBEzekKqFWBBNe7ndY4zNpWaoxksqSHukgNwTMBq8idS4ee9bamHPuhWPijEywLHnKUvotEo",
  "key18": "5ei2ZpbMZxsTqexZymZbY3YAAS6U15HaxZDnKGZyvZamai9Y5pBtzS1fPZn66vZw2KcYFCfebUFamr9caZarAubb",
  "key19": "4LbiZnT1SYg5BVEcgL1bEBWUZ66vqmGJqMbwFzGjZZsTJTxv4dMp5tHUyUsCuTc9PRaz91vZMgzu5RfJNm7t96uW",
  "key20": "3TuzAu8w9UUFdycbVFDU1dU6hiwiqQpPcKc4yNXi39rRnxghbNvz3Ei8qYCr3JfjyV6ZLcUt7pMcmn9q2QhLq1eb",
  "key21": "4JAFqPgyEFUdTGBywfs2f5TF1S19ZcpcWUtrf1Kz8UBSgR5YpMiJjPTwXd41iDMvyzVN2UT3orj2Lo8xgFiN32oT",
  "key22": "JDD1nX3DZNGk4woB5bcxnBUp23t4oR24Ncpnjwbio9Qa7FRyKPxdZnRUYYzD1UPyCabH3rEXsHcgcfwEtYjgVj7",
  "key23": "2smNC3MrsQgs8heDWHviNipzZvqrboroZKs9Qb4ibU6MkTZ94u3t1HC9PY4vJ5HxBxz6J31Si56v5wdCV6rdorEY",
  "key24": "5a5uRK5n6MvN1CWee6dBKgEGmsLSQAxXCvdh7KUFDXNeAqQFwizNyR3PTEWxqK92ofWJUP77X4hSA6Gomc4inDim",
  "key25": "2wZNpF4aUio9PjDPS3dTfJ7j2nBNgWuJqYRecAv58xxsvUXuEpmtLBCB2h8oAdQX3LwGrAS6hJd7i7TpMKT322qi",
  "key26": "5fGfm8DDE4PAWF6Tj1DZjpByXRwNJYNsDGmcUbKuo8D4Ge6roi6NgaL5w9o3yQTUX5xoAcZpsntVZFX4v28dnKiA",
  "key27": "4muYVsm3Dh5YfUWmN7NpxvJzGzWaYXHvDip6LLGQ6yF228XqPZ53Nd2BTvNyxvBZtV2BNxRzV8cgv35tx23RFYSf"
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
