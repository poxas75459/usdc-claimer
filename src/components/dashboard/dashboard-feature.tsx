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
    "3QLVVPLucKcBLuJSuL4fKMDTBzdb1JLxFqLj5s8qRehfBcrVKfxEfJfazPFjGjcPW4JTfP3Xw4YdPEGmrUKaYNjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423VtGHx9sajsZABiDVNBiBRTkVtzBWDdzRhoWZCMj9ukHQSCdzYVC2MDzWJiG5JVFFGGrQFXgc59xECxpxnFzpt",
  "key1": "22scLx9xVHdYgrSCZ4rKXwin6sB8dQxrEQPE1ya11dkkTLSCi5dHJY1JHp5F4SCL4mVkAsDWBXH79D9vnrZ4FcHU",
  "key2": "4T48giotQBnszwqnWj6H2r3M2WLEnmTwxtxYNiM966xEc9F1NHAAkKE7tnziEtEZ112wr6ZpTHzpaGUq9rYV8act",
  "key3": "7mVjqwGLbHFdwr7tho46WrkbzEDG1kcu69cmkweHQBMt9jSPzedDHyqKqNd4pj172aYeFvgzwTE6YqzND9DNRjm",
  "key4": "8TBaiHxK1oNxmTMTD2uyWQXGir64tSDSX6wUoiNn4RZuahC9ZD7unmZJyJHXaZkqXpcqLM1mfN7vFdgm9KofKN2",
  "key5": "cpGNN7biFP6rvLxVYB6mT9X1uTvjugPJFT9LQDZEefRJnftddhNwr6J93XbiE2ZyQkTYKmU4oX6X9bJLscMJ8nz",
  "key6": "p8y8epDY9NrxZHfytiqsAFpiugRVaemDBzHsaqVeW1sownpUiNuFfwJNNWizwu8kyYg9jCSra5KWCxmzDYYrvsG",
  "key7": "5YwWtbTMNtLyfne635AfooW21BSSLN3nPMEYYvsNE3XyXEhVdDnMaVWmz4jezG5s5WAm8e3vWovQ3G5QxhvbBasf",
  "key8": "4foU13xPAQvRLpVaf9goFtxcvKML3R1kEZVezvwFocrrkGMUzfSKptJG6ibixKovxAwnYwMtnZKQ7PiAeEGfNpdA",
  "key9": "38ybSRzV6Z7w8nJHkJNLW9EmEEWz2oFw63JJdfHYaPypWtcAv6pPasmsatL2qp5oYJXWbjc6Vaiv58GCFRXRnjne",
  "key10": "6SHgpmC8YgEUYfcaTZswXXRKnLP8ma8HfMWwWbhfgG2r3xTMGuhWTRSZUtRnVLFpyRW6QjWEA9dRSLK1p2sJSuc",
  "key11": "4xqAgntBSKoRABkbYrxYFveTmG4Dvp9PSpn4rDPbodp9DEPAkupkTAjV2FjYVz23qy5r6oyVLqcmKczdjTw2kzsY",
  "key12": "3zQ4TeFUhpYeWPh3G965eumNmUuFR2Wyucexmt7AzCu7tFD8dGnzCQ3NNvDsvVh3PuiKXFd7unhQQotivJUE3DVp",
  "key13": "2HYYzfCxTHQuxkkJqhDkQ46iJSnmKZuviogVCRm3cRrcsayWrFVbH5MXPP63Zy7tvKwBA8yVWMLsALQNY1e5V3dG",
  "key14": "4A3LTxvnGghSSfN2ZK8SReZkAbbMQWUxdHgEGJk84hFCv16rTBbPaZHtwciRFL6AhjE2UQRp9Q8dQYR6vKF3QqXg",
  "key15": "2b6DxwfdTGigYaXrjx4NGgoa9nBZGn3vVxQRA3TVM75VoJDQKnAKXNmDCNkM4ft3ofxhNM2Ge8qZMrYKqbtaBMGV",
  "key16": "665Lx5oho3a49X6qVxbFi9CKd3YQtZNFf87y1aT7fpSV4HvEdvtzS36y4P4ks1WW265JGQ6HUiRDWBDKKMhthGmF",
  "key17": "4TPRoR8EQNqawWTauU8X6uuJp8Cs7XEWDSgGJWwLdYRDE27QbjBoPj18X2BAkLfqj9JdgfZiCazwt4uScyUGHdaa",
  "key18": "5NnmAiZQNkxEMJs6Vj3KzHcdKRUgFvdUDkynWTttx5GRn3r9XNjZZPnKvrGHLJhrMNsEnqnJccs9Lrzi6mxw3J2c",
  "key19": "22392UwvfNWzb3zq1RoBVMTdy5KaugnFEKXyydsVusqnEEF5GS9ghuHoeWwd9G8qTvaeiYvGzE9JiAfbSNkkF11U",
  "key20": "31BaX9VYBCXi3MkDn1tcQG3mzRS7q5bPEJgjL4EBJWyXE9giokpur2HBPNdSV8pJJij5MEobgtPG6yrYocrCyMEA",
  "key21": "4KLNE9U7X3ftU9KPZwvqB7waoFL3s7biGq7H4tP9vAFRDeEsFwUTdXyrSjRcMjN1KymQeDBsZppapR1275y4T7LV",
  "key22": "2P19J5KKTn2dxrM4PSKg6iXLFx7YQcptJ8P2dkqbyHiLsuhBaWPss4QzXmui1kwQR7oA6mxs2D1wwpJGjeqbdSXU",
  "key23": "9PtMWqr8nG1nfVSrxJziUUEzARv5kCZMVqv9K4JcimmRcFgNNn4RPSFvZSf6uDed4oQSxaobRVUMjT9hbTRvZ8w",
  "key24": "j1AMbMsX5ZrGTowPcfUjbxJQBKAfqND5XxMvPKmcoyPRorPXdytotHVTteSAqGE4WyP7LsFQ3TwtHstB6mWZQbn",
  "key25": "4KjnwbuKvGsmE6G8ecyCCCXRVP5nGJTdTxwQ6YQAMe7SxNmyfRQnRsTmUWX41b76nznXVHrtG2r7uZF8Qp2f9FjA",
  "key26": "2qN6JAjTTcUAmvYHbv3spfZtwtDfkqJFxhv7SpSnLutu1T71H7fWEgjETjcotHiHAaXhcZvPdirbWeukKPoYU5tC",
  "key27": "4XHLUyEDK9KpN24ivTeSr9X8eGWdcWsCJcDf2Gcvvxrfss2UuSYrapU5fCDmsoAkpdNbafHdvi6dRYLdkDrkPNXK",
  "key28": "644idYtiVsdFFFF389gWd6VJmA5uqYMYFdns5su3sy6mG91PL5m7poRSx8jxq4XaPveZQriTqXqUEomdahTxPa7M",
  "key29": "4RMySbFsmyMSxZHAnLtaFaoe1mvwq2oo8geotWPezbX6R9AiAGRWU5goTG87BL9HUL49cf3fDtBfoWEaGZb57y3U",
  "key30": "3EEqtrpCw17HzwRYyYpbBtVAhAwU5jerFXw235T5eWCvrcWvVQ75s9sn89UWWKhZoHmaPcRwUJFwwE76mJAQbKA3",
  "key31": "4Y2hcTUqDZ7JsVXhEQNxTPKyF9wy1M871xwKd8fKXEShaz5KeGnNTgzwgDbYuZaabxgAjhWoVfxNpZkHH2gSrqaM",
  "key32": "2N3DUQBt49cxohMXNFPuAACrFnvxg4FMnmz5jLnSNdZXBqW3NNYRuMvRqr4QAnQXCPB2Q5wa4jKRqyVh1WjFTT9K",
  "key33": "4JwibCLuJuxNGHeXRHM7Z5mLhTNQN44VXSuEm6Hiq9Zky6ZfxTr8dKAzFHeoZG5BHtU7TWELrNp3Ya1RfW84YrTR",
  "key34": "q8ZZGRWjSXShoCUBZNr2iTu9mmAqVAmute6MCwygFTzVdnLZhMWR5KygakdJq7PegtNbXQazPSJaiYgbQ11VDge",
  "key35": "5vbQWjdx8qvbuGA9G9WFBNSFV4rZ2XaJdUFdtEsBJqVWqnc1dw5H3cvM4RHy2enaagsDqyJZT2fuAg2MyMrLhzJV",
  "key36": "iLfLEvD5EdBgb98Q8i6RBrK9J4HxRW1q4yRY5HFkrd6fKYbhjkQHxxMvpy3nCyGmbskCZqaTMUrQWtSibzbTLtR",
  "key37": "63Snt71QkNy3E5jsv2XyH772C7p7fpaPncrWx6dRDNz8hpK3TcUf76qxWoBjxuwYZwpomTNtYiJGYx3ifTjEgTUR",
  "key38": "63zqvLzCdkUe8Vo2BgMmcMwi8K1xrkxSNLuypmuCdtNkeviB1t6RAhv4vyPDm8hHf5CPWYev28ybZ2DW7WB9XRPW",
  "key39": "3LaMnMX3dM3X1SdgMcf2EfcvBTHem2Jwm3yhe8W5M51Q8xApH1aBsRo3JMBY2oFE4TnuyPbRqng37NW81qd3bruF",
  "key40": "2Ceomvq4jiEpLn1mCx1NwmGy1LLQVN9oMUevjQj86F4XuqAr3VUmY9o7j68NSG1tXSYUpWYqjebZEJkCrTUJy9S2",
  "key41": "4ST2DXD3AkdHh4QuEzFFXr1hVHbk1JRtXFYneqmBmfH3WFsKU6vEDo2kmgiU7pmGp6hnzk4RtrDY53bBFoscTNSB",
  "key42": "3ePDwqTdE956R4QysrEBD1ebLY8cRJfdamF3xeRCzyVoBLHhCSBCZEFe2JCThmpNGEjzgwR8hKzPQ7avHwHjNQMe",
  "key43": "opYHk5exjtQFzyG1VQtchQ1GPhTVKQ383h6kxohPi3ErwxcDn6geKm9nss84n1VQFDoDWJexNo8L2R4x1sD5HVq",
  "key44": "3mUfVKYE5KMZ7igDzRhGdpbdxcJjrmtyRuXhEsWm8rXQ38jgTyirSG8pGaSGZ6733gSxZojAYA63t4F3AcDmf86e",
  "key45": "4MdUqBdQTe98qcoRaud5tnBrjV75ttn9VtXULqfANaqER3PzBqysJESyFfyX1Y6ugyNbrQzpiQRLM5n9YkcbiooK",
  "key46": "2zeSMR5HifAga5q3KbLr3t9n11yTWakw6mmt1qrefCYBBEq4eyq7HnnMhGMdLUdpY4dKFM3whAthYnKVxExbhiUA",
  "key47": "trfxyoCb2jmFj9c4M5iT5QzmbeNY7RMdYacK5zj1JpG1C4hWKRWhHq7MXRaYJwGpr5SKY2RrpundwBq9jho5ZxE",
  "key48": "5zkdvHxiCJPV9jT7eK2YhJab33zHSfCCHRcTxR6eiRcqn2PUfUBaWzmgb9C7exXVMNNamGEK1t8ZFE9jCQc21MoA"
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
