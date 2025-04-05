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
    "4iHJAg7N2hvDBxgpP4AMHf27P41MZkB65mDu3ceFvnMQY2riBnPd567ce6FCybuz5LqGaeFEukqrCAHt6oZfbFjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DdnZNjS6mfSpY5rFmDpXWjx8Y9U9MEjhnPKa5j2hLDncB8BXBmn53u1EEkWCzrzPrTwnbMGSkV46b38WzNmGpvL",
  "key1": "38qQXvgburJpW5gt7VoXSoDY2ukQ9sK2YTcYjbVXuDYWqQMWVmT1CuP74KGj8zATUTQurCkQT6JQkvFy4cEZzqRD",
  "key2": "2teFwSinFUUYvM8q7wh6SeJPitVv9MuykUQUhjFsnsJAtuA2BE9CQsXp6tCF6WYtj4qV6PnNfm9mk8ge1xMtZmYY",
  "key3": "5d6x9KE2SKJ5X5dQ4VitCUeEj7rVvJJUpAF5AcXbkd6VhqYGHVfiPyGYAbB6XUmKEjozfAnjjiYSoJWmg1Ufo18A",
  "key4": "4mzCPokPFR8SQA4QcgE4r56xnVP1yedYCmVji8Bgi2VSQqtaQuzZseaWvdpUQandA7A6U79CvPejmnpGzHikvvDc",
  "key5": "4p9i6hCq7F8mG6Vv3zqBsTvd2GfDtE6jyVmFwkHkzkCh3RuWHU6FM6Ba1U7gr6zZwGQrxv4zEvzvinaoySfu9vo7",
  "key6": "5VybXhtSX8QVvAHghkX7aDkZkWFH6mTKRzG9TAGf7Fvkr5Etz7r5yySpRTfWT5En4iyoBVZw8LtHGFduQziYi8aR",
  "key7": "3Y5RPHQuJRgS8yASpNj7hy6PFUWBxWdadGGc9KxKLS2YVcC3jTSCBeUH4Z1pUdZ2iYFKHAE6STnRadbhiknohkVt",
  "key8": "4y6c2QW2JgtzJwg5zFF39CDV3umAZ6K93Pwi3tNQgwLvudmtxrg1a2mFDx67BgZWXstn773o7By3hSiayjdaHNch",
  "key9": "zQFH6fT5LGqDMaAkXmndfFXFm77skX9xoyfTkq8Kv83Bj1FynKrDyW8c5u9Hsp5CWhvS4PwWCfPBgR6TmadxvXv",
  "key10": "4sMxJvczEQR3wFRRGKm9uBdUmPtuXBH7fxahAsQG2TyYoY8EKHe4H6bRPxTen8nsVuyu4TzfeWhZ4cSBm7QH5ASf",
  "key11": "5Mh8eBp5ei3f2pKG9msSsVqGXFK1VZyGp3CJowe36zatfv6Dc2iL1vU9wW76artTBkaVWbk7oLAFu2Q3Jq5Dk8RM",
  "key12": "4Xf1z3aUiNfVMamYbKDMiqwQNt6dXtowfaMdcDHPa3SAJMiRVeEfRwtpRjCJi6unGoJFwHrtUBZHhRAkA4qNmtQY",
  "key13": "844mgVPwCeHujcS5jXP3EvgENzs24TwWzAYQqQPCUMZ1cLAhhT1wrxPuZJ36HCsMHxk8YgenYuBnnrfw2PpZ9Ud",
  "key14": "4VHiGti77FSCCqvCUXWc3graZYgHkKZad42wqPAZhHabZvJvpTHdYyr7PBhQM4VTMx6KtcQC2qiaxDWae3CycBKk",
  "key15": "Yh5VgyVYdaHrK27Gnq1mfRiZaqbXRfc8cDs5nZ1eC8YNHVUZfcjkPa2nvgrUX1xahgzYy61PNHyENy9vCXNBG1S",
  "key16": "rFthWnLvKFSd2CheH3nLgR5J4QpXE8s2dp8Xv85Lv65gFdUCZGB1EtmBRarrQFqVRgemQzL6rXgXgqYLtLXK4xM",
  "key17": "Atdooy5ArJaBXS2X69i4Eu9mhpAJeAyiRQajM9zjzGGvpVq2KJDjip6cHEGPrnid8qax7S8NAbsjBfprM8x71Hd",
  "key18": "5C94xXKRNDxBnWVnsJJKMMprjVoVW85GAeTy4xBv7irunxgHsjATsvR7BqJtKUZHKJ8rjuavprjdFfo5WhZpNrtp",
  "key19": "3rL78DhY5U4bouCPqNyaqKsBGj6bEbre9Y8MTmgNaRw3rfop6hsWE1oYBB35KCpgk1EqKU89HvfTd64rBUgUXn37",
  "key20": "3wEES6vRc5nW3bnFYts4kGn2zUNxAWEn62JapW8VYkDayM8ZySdzeSRLgjXos9W3nRc9ooryY9a5ZTNxT6LZDj6s",
  "key21": "44nTX7DuqjySoEW1YTgPKdvMJDvHEV28gp3mkhvNrkVKYamY6qk1kUDXDSrgyuh3SPAAj63cACTmPNEjMLyARvHo",
  "key22": "hcCkuH7RGQJQzokuHiJBMzQungicrcFSsx3GjrNC4qx6MvpSKTjtii1Qexf3LEuDFw9GaWUaKxspRw4A5HRMJvk",
  "key23": "4BFx5xcNoXKUAz9gtHCiu9KXinS9Q5EZDzsXtf432FAToYELCxjkAdWmfUpVaTvSTQ8cWnSAuJV4c3J3nz2CdmQ9",
  "key24": "2PpwzP63cPSTbTXHQ2fE41YnYo8xBRG6HfHJK3ezbdnNEpTcuPMFpwnDaa69WKrzUZbTqQBqG7fGUcaRArg1VWbd",
  "key25": "2Jz4bG4qXcDA48oxjWz8u95oBKAfLq7rFpRDWywmFrxHpUi7fWiuAGb68fCdApJGbSrY82YT9zAAU6eHbGLwAoUa",
  "key26": "4THbVUgCC69mMSVTLYhyk4yb8M3f21dgU6Lbjd1M9eRtCy3JRaUA8AsS5mVfuMVbYWKiRVpkGw6TDCGdNB7tryJ4",
  "key27": "5RhgynjN5pAxUkeuUKghb29wLWTHRd1pDkFtQFarndDgeyag1YdwVSb6aXZRQA8aieJQDMykvYBVqRrhqmcUoEwW",
  "key28": "4dVCEJVvK9KWspwcKx818i1JYJHKXBe7VLAwgH6SzomzRwNajBuWJDyhrAR8FbgizXay3fNnMrfnp1s29mx2Urwz",
  "key29": "4ztv6RtYpZ7gwz7mDSAZvZiDR7aAQxyLcM7yLyxn7MxiYkAfMBGKES7Jfq7kQcWns6WnVYTe3WwuNkLduxBWWawU",
  "key30": "3svtWjTQdULnxwSW4tTSAK1hsbVS9s6ZKvaeVRp27um8aKo952pk7rgyVj7Cwo1UAts6heM5ZCawE3ALUaoGZEYs",
  "key31": "RBthkJZiMYFch2JZ4pSkXqLDhrQ4dDLjK8TYa3ni1AfxtaC5KSu51nqtwRfcQG9t9CuuEfXWXeN89GNK3BADHTj",
  "key32": "uYBPMw9muA2Qa4n8p9d3E5g6gXBLJy3oUbtQmBvqf86vSCWdCQApRqei46Q1Q7k5pyZRsb4gijJNcLF972N6Ztq",
  "key33": "d2Qdtgy7uurZKmeaDH4rkVK4FhHJRcNA4niGSvL8jiDA2EDMFn62nunS2DBANLaqRi7B23iD4s13YdhmxxTieMP",
  "key34": "31PYd1iigKmmTcsFHNqxavBoRDkY6XpxEnRmokSbJqLJ3TMho4cdCRKcVcFjjmGcxhSYaaUYi64UaJbHmcdR39D1",
  "key35": "23PKpeabt54h7YTnxEtdDyCruuvuzwM4JeJyZvQbn5RjE13xReZTCo9C7yoJGb76zpSHxokDHTCuwFR5EvJbxgb9",
  "key36": "5rSfksLxNH2m26RX8AiBRpYRjNLCus4GxKYTYeCQCiwffvZmmZrMC971poH2LKV8YtWswV7rwd5JzvYuGAhYbq51"
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
