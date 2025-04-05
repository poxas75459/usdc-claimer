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
    "57fUq6LhkrJ63Rik8NLLy1YVrCwV1S2o6Ev3VaN1yUaE61JPqVbDYENzLmnS2ufhjj4dqh3UAsEDCvDDc1Si5FVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yz6rdEEENfzpEamdpcnmknHcKfQKr9yB3WvahxPEeWH9AqS621zbBLr1PhPBSUGUknEy4Y6XQMkxkpLtDubPjsM",
  "key1": "372hpDUnBrnksmh1RktdqXiBr5StvCYMReBTMUb2QeK8jCUPGRTyw9dMZmqxzgd1dijp2CBbYZsAc4Xtf7sAM5Xf",
  "key2": "4qqSigWXkh9xAQ8k39NCJm9aUtt6WoaemtzSMtQQQpY1rRR1YLT3SB6kViXocfoXgRF3iHmDQXknugxvfHGDbyCd",
  "key3": "2C3fPVKz6MYa3TPLeZ6Z7kN1jiqVZnPvJpcYKTRm19WB862kZsSQAu1z8S8ozktNYVKitr83Q6bKSr9ZjdcDqVGr",
  "key4": "22tLSuGQ5WM9hgWmhLo17SRHAmNfWT6ZiLFq6tcfnG7zghe4CLux3nhRfjDqHpVgKPnLUQSVJQHfSdwWMso1CmL4",
  "key5": "355BqE2M3m62ChdhNqTHLFVQaA9QK2LeAoMfQyWh8iH1TeXH5kS1wsCMMXCvbovif6RfPLMzxoRzHZiVFfFgEGWS",
  "key6": "2LYmjikiEzJ4ZBqtw5LPo3AByTqjkdq2CcFihXmt9g1dFPWUtbSyCEY6vTj7eQNmqFNJWGVS7HJQwXDLH13zJNtk",
  "key7": "3Rw2kn1z2pPNXpWnV9MGAVcotGVxGePgHCNBGUYzVruqtms1ZGtxfdC7M9gETNQRXk4YoM4jRh9SMbubX7Prqq3q",
  "key8": "2CbMNyoQxf1nKpyGPNPCkUrNBrvbt3kjXc6hHbNbSfBCEk9ZthAXVNveS1tEAnFnaGCeGsynTruvSHzTt2np9nbT",
  "key9": "4fQcsu4THCTDuq1qogP1Nv1at2P6mgfE7oLtPF5ZuhVKTjK61wk4a5k8xtAuZYowe3TNdF9jWwtoCCFZh51sAFA3",
  "key10": "42zbe8NFaqG13iM4puk3WpiWHdm2tprpj1J7ey3JqYrTpaozqWDpapbgvRY2atDCZnwX1PKpDRs512XhFV2Qg8qz",
  "key11": "32uZjNEZKUGB53Rs1vHC6vRUBSMgoTe3dE5HZqwxPqYwf4WRJ3N8Jd3chsVB3me9HYhiigtQwjCkWZbmZux3B2E3",
  "key12": "416A4dUByEp14TCs28NQh9dSbcA3FFdJy22dC34uMhTLh5cbYv4LWYEmRMk43Xb1qEumamHd2DMT8nqoSgVWuMVi",
  "key13": "2JSZiLVYbvpMQ1rnkB3jX1PAP4hYzm5oNbVCH4Lm81e1JW16VmCMHRSnAY4DXWWXLxWPH36e3vN3wMDwE9wDcsuD",
  "key14": "59XN1zqd77bSW15q481TyBHKeoCEphaxrEjniJr7zGuKy9ZmqHZ6SeU6mELM7mu1QfUomQGtNnL4D9Vi4kfnJyF4",
  "key15": "3eosZsrv6x8wRXHnyYJJRHmRDAStvs7arCh7F6Zy6sC5MVf7hgZ41aMgPtfyDqmGsEfSW39W4BjK5FpCSxatcdRh",
  "key16": "5zGgNBKFjGAoNbMfKHfHjAbbi9hHjKBYqN2uh8oYFLfX4QKaePnN94hSrWMwDfPbeNGo2oYxwepMDpJhjYAyeqZr",
  "key17": "5sPqz648pSqctVtkNorf7TA5Pz4H6Cfn6ddKhWctywqPvX6ZiUdexuLhTzecicnHkgcuwbzb2eCWgafQGJkBV2st",
  "key18": "3U2Y5vQXWHwZyTMwJtrDXbK9z7ScMBWgMydVtYqCQ3BNCoVusQxEP2bQxLLJwVscBKiHkBcJHPVC6kE7rsHc2AXt",
  "key19": "4Pv49gbAA4FBFMktBzeTScSP64rinz77Nu3MgyfStE4JxBAp9dwJbdWRk6ueCUDdnZgztJ5UD4VGxSgdTxccahC4",
  "key20": "4CPH3xVBAzT2uqytKLXc4XK7xLFx73V4WFsS6irAtwXZoyM9EtMBppWvo22qCumP53NHNCSaSurPJUQiNBCjDhfs",
  "key21": "4nLFj6hRwSpZ9V7iAH1AgBoJppnwPZNzauhj5kMZbb5ZwpHAiThysxDRsoYkciM8ZR3eyuEoQbpCGk7aXtRjSSh2",
  "key22": "4UUtAqSsYKi7ULoQonpu4vscmXPWXqg5STekEHJcrXk6XNjPFb25GgSpoiE6wFF3XSEdFeKGpspzZLfL2UjNnzWq",
  "key23": "5AvJ48FankaAR5NbYTBzvGxJgyFTA3xDsPEr3D6uGo92JSbxzhdNWugqMttzUDjySRiCsxnQKfQAWyGaxm8bnQp5",
  "key24": "5nC9tghVaWK8eWZ1VRF6HhNqRBuxKMpKZr3iZBwud4irSKR4NPPoXzhxdYECcFQY96dd2Vh1CFnCouTYBrKktrLK",
  "key25": "33ztef4XuRCNV52dEMaZw1z8UiPnPxS9APozQCRxmMfATKVNn7JWJVwGSpn5zjg7g3CadWWrUXSmBqtWyi9ygt5v",
  "key26": "4WnSAsR9jnFU81S84EXwmdgyNkAGmz4dhE5Jh7bcqmYrPDffRE1cu12aQAvfBcuhey6wynCWCtPgNUZZBeFviko5",
  "key27": "4tcxjjgFz4RoNgWZctHJydxXQRnfbRmhjssw2iLhn3qGDGvTHp8kaRrB7wp944iA38HhLoeoAJkApak86kGmr911",
  "key28": "5rNHQYuQ1ipZN1qxhoWgtUkc8q2QUpuqPufVtQVELJ8UaHjAVvHzU1kBCHU956eBeAUC477LKTkQmu3mbLM1Sy55",
  "key29": "2CwSnq9dPhHRGmDKpKJMDRJkZCn9yDyczspKHZCNg2jGM7BWX5Bvu8XgVkz6hd4n1Xpo7TFuuuVhe4vZwPerNYV3",
  "key30": "36crJmKW1L3SqnNhWiVoFLqQroBDxixTM7hgYuEhrwivV9E9BXmU6Pk1Si9FEqAqv1k8fJBZKqJXDuCnhj8W2WKg",
  "key31": "3zW68qdmyEhAjpuZYuaAJNidAGGwJ5thXE8JDKexhM8QWYkj5Eyz5PbPPnkEVZXNEsn6VVRrjhuN84YoNnGasr6m",
  "key32": "2To6XhmVdAiihfiLWsCf8XrkmsiB7qSWYuY6S8MDseMQxBhcH87eXTHAKY9pbGQDgT8rArTfCS7mtR2MfJxzZ3vS",
  "key33": "jv6rJn9qon63ptYjR5BGX4k9VQasJ3WpWJTMRYKhrcsu2nSzZ2oECi5eEyPCc9UdndPYZmjPrL2BxAyUsuA7xUk",
  "key34": "3df9fVoww9Aw6hiBAcqRLVhRQRgvRtDb36TVLuGWURHz3bqh4NfRYMDzeHCMz9rdRAMFQhSjX1myAHNNJd6pAB2",
  "key35": "XQQFyGNtK3sJvi6hiSCt6mGHAF4sQb9Vbjq5wkj1jn4h3HjnJvBgkwPWFkpyjwuL7zqKPyCzSnVCX5KpSqLxokr",
  "key36": "2HBL69gDfeZNrbrB7YrZcoKFDYASNAmHuPfaPMXNrxELB5LbH4vz8fp3qrf1mhczyb1pGG8wpzsehrUWgPtXSuJj",
  "key37": "kSVUWNwkiAd6FVd2fHQLJqtq5UTod68eKcdztVZkB44Z3fZy69wRatvbHzWfnwwHDmeSgMy6xTjFPRHmK6hb16z",
  "key38": "535rp8DsnszPaGD17XQLWNZGwGwbzbnsouxEkomVdYCtjg9v1XaYyxQmoA98uKbCchZZaxCTE5Wvz4rVkCmNbX7k",
  "key39": "2hBwZSeYExWF7fpTaVkxEiMXRPJnJuoRvzmRgtqUtSxdGm2N3ZZhiDjdyt9GWE7jPWsSoeZLkATMrnwPxAJTvhre",
  "key40": "5cuvKy9c2E4wCenYiZT9TvzCCoWBSbeLPGbScDxXXbavoyxTEWzhArBPQG17boWrCuSbJ9F75MbPyUUdecTKtfGP"
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
