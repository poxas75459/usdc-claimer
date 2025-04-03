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
    "3JELx2fzE8JjfeVUyn2SCeToZXiXh3Q21gXp7PWi73MZZkHGPfjJBPqYdfGvtAJ1bbmNtn96hvPfpnhVQKxY191q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wiRxuUcruQ3BHvYiwqA6GELBGSe2bDsxg3FfqUUT1NrG4Bihx3bJWdWgCHhPqeFyqRmB4NWATZztzNZrmAw5Rn",
  "key1": "2SVfqDRCkeJ2WpMZpX4eiNAvYCy4rJCKrSS2hmQ7y9sovwmLMvNMARy8SM2xHkfzish9jP5o8y5eo16bdNbLesBu",
  "key2": "335o517XxZ5dtyyviypRDMRpvJZTWukpNKfhmNV6H5h1QLm49wU3CEdQYTpg7KGFwZ8nwnmWbYgeukP7FEbY888E",
  "key3": "2Zx68LuJECagzYMSfkzawzcBs6Pw1LgWVf5CJcCCiSbVszncUfRsN3Ro7qqAauDzFv2DmFEAkfagUoZAoCKAc6Lr",
  "key4": "qmumjduVVUyJL1oBtLthBAjNCu9x8VNPbuxQZ384wipNaUMqEV7MDmj9qUpmpBfAAEEhw3JbFXEnBuMHWXwVz9r",
  "key5": "4S93sDRgmd1mh8EKttuEJnSgdxfmePr1ufa32VRnvsawZDrYNM6nFKwbe8uTNC72tdkuNzaQvEbCy8CPqy8GsHLQ",
  "key6": "3rogoHm5ht59xwaKK9ZQ2gsfGhcaAUSYzp5JG1yMcBH7dPNWo8ZT8aSEnsw39VRZR9Xu65oup9LkT3SvVEoBePF1",
  "key7": "23uK7nZDKrU1DNu49A4dHYECXU7xAQyMrRBafsEDvghXGKcfbbNQ7WkhbDYWtgfDKFEPJ69oas6xhKXUvzidmWeX",
  "key8": "2waBhaXPRZMpGvXwPp96ktSU2GHh1jM5iY8RsaoSPTmWfKXDYhfPmQ5fdBFRQq94WKUGofTgx6EGhqj1wX9bfC3X",
  "key9": "LtecHoctFVhj4LFCjUR9X5b8SSfYou6FEQNPAyze9NBNFff8bm1e1KYRNDWcKahNWfNNEZ954zuStpDp3Udd3Lk",
  "key10": "3x7XEE228RtphvhRNAiVyof6WFEU5zy419sJnte1yV5RwMtbvo7197CfyVDHBZ3WmXyoyJx3izja69MNY985FQPn",
  "key11": "GvN64Ytdy2ozrC7JwZKdEkek5NtfEcrZaDQUqCjLzdh3cK9ycfSXR8b2qtQ6mz2E76eheFLCGkDopL2PKsSqesw",
  "key12": "58Y8GwHkwdzPE1Zn9rsAQwargEmFHbRQ9czBssu4cYamC58Nka4YzcmDUWNiR9mhKsoaxychX9VoZuhBsHQKagZP",
  "key13": "3ZQQH4MqucNBSVSrLCMDS6y7WB4sXjPzTprPnvnsgnmznyAR7vhMLdxdY9RTgAd9qaGad7R7ybUgsB5HCqEgZJeG",
  "key14": "GV9szUAnv4gogLiSqTuvrakfqEAL4iDDD934muVzuRPEULxW5aEN38qGnr4R64u1bEjXAYhM68vAXChaLH6U6Pa",
  "key15": "2vfqk8dbLFeKqEmkkd7L9oiAHuVnTGzVwMJvqUv6BpjRuQcYxhx4BQwiJ4Y3LMpKhDY5GTFSPPVSmvfBvr7mdLLB",
  "key16": "2rUay9nyHeJ8HyagdhUVrNC8zY3HS1FyUwQBoYBYouj6dVqE6DefqVUcycUpjsWzLAunVc4D3g3cvZWKEX38ap4T",
  "key17": "4Vh7cBQJL8iAyK22BbJscQsyr7gAPAmg4pvi3QzLN46ZYpes6hdiYaTi6yASGBtm5np2PsJprnEEXQRg7WZrroCp",
  "key18": "56K4BZe7o6tPjgtmnbohKo7GK4vNoZChQiRhN2QbPj7ZbjePMX6i9K12gFYcQ5xpm2wKyfE1ckowQvM8wbpugPhX",
  "key19": "3XNQzCRVGrWhhD4cjFJP4Y1g2o6eAAyNaCF7qRxYenMTQYciPqYSRaK8JeKAUwpyxxYgUhjjBn1NfC4tcZo9RCoc",
  "key20": "4tatLkqswvSXt4BLhixENLLJvGxDaa5remBQQZHiWtUnHtmZySN7WALo1WUitSe7ASVUHEaeciLLbWi3ZRqrmhZi",
  "key21": "5G4AC2D8SXc4xeMqQAWwFegTYBWzTbW9eQ1QsjqzA6zdX6c9ko8pFZop5vFcr8x79jnBtgVnqjjppXXcr6f5PnkM",
  "key22": "39x12RswhWgehwxsW1zTAv5zh9AxaFTwLYgGW3K2v6buit8CgDPrJyNr3sMGkqvtPP6vUCbyHu5YKB8rPy8gm9ds",
  "key23": "2xYkBind796DhGUkkKrkikBFM8VbNXrSuAJCna8B1AcxSYTSxqxvXtnQ2ARLM22rrEmLeHoFhdoA2FE1mNhPYetR",
  "key24": "SVEfG7LEmdpD1maDka6aQN9QxdeLYbUnu7YnuaTj1QZ9tB8DFgNyrzQPnobwoy5csoQRkix8WRivMhxPLhsNvCE",
  "key25": "4ofPZf2P7a4hnfUBeUytcxK3qUE6AvZwsrw2tUjwrNq8k3mPhEgH79m1a5R8q6stWop3td43XVjwtXHVaEBSX5n8",
  "key26": "SjTvoah8cpwWCM2VScTqRX8UEL53bEttW7zfxgAPvS5JSGVm7mgYwdSdpwvFdAPgpLoT3hNkCEAvrP8QjaV6kYn",
  "key27": "4JRVDECLwX2MBUrkykstpnqihwLfAJYvFLBzvpPYgPJxuTgfaBBv3RvvoB9Cw6KQVpuqALyBVW12EWtK5jDxnPzG",
  "key28": "2TBU4SFhQL4rfZxi2kBkrAQBmpQZJfh78qJvgzRygUF2cSTNmGDE871ML9saDc3J6n3ZsGQQkTzsh1WgBgTudQwH",
  "key29": "3tKNbrFdmfbyJH8vWUUzBhqcmn4DXLMcwW7Dn5vPoDYCikJCcFqbaTKfUH8FXZyyCLQ2HAcEWJV97vLeFGVNcWpq",
  "key30": "4eJDa6mWyZFosMyoDecxG3EBtVcaaGAEVrMymaWv5UWkHFXRx8ufmVUW1LaPnygkf7pDAU1qrtVSZ1fLrRrD8UX4",
  "key31": "5NeZpetLVm15HuxuhoqaWsiridSXgsnXdHXZQXp3sWsL9eDWTWCTaGgQcNAp3yT3M1VQv44v7hEKXrWU3KAaCu85",
  "key32": "MgBxiXcLCJJ89EnQ9GD2htRNMPXq9xFkbM4UGHxqi9Un24G2sCP4Pga4NpHHLH38yBLnMSF3NsUazo1UXyeyiZ4",
  "key33": "2bq7BC1JnANfQyu7n3hE7s1dreXWThjR14Fs9rCrqJjH3NuLWHUfhW5GwE5aPNhVea3MzFppiAowuf1tig3MRqCD",
  "key34": "599WCfHM52qynrunpJia93YaMTRoSyu6DZuUsBkrGtmqEDMMJ2fP9BLTEBbHa1zvHVCZxQYUQDePHc1vaCU8gfyj",
  "key35": "5X3jS1hcrnhPw7cdggB7gr5RAg2smtPRFduX8G8pFWXR4woHuU1LhBz2e9VwHnmhZeMShC6odBp2YSji2BLkN7Lv",
  "key36": "36bwD22RQHDXiBrwGhWCRp5nib5u6nyS6xEqbvGykiY3ZrDs2xcCkZDkwY3P7ZWDKLAvGgro6BgL2ZR3qAFoQZxy",
  "key37": "3CiVziFwZgJsn37gw9Acv4NWCMSNYRdYwnKap58YtqS64Mhiz2vsa35r7Yd6m5UTdpbTrn3psevqbZKuUCV58YBN",
  "key38": "5Lboa27xP6F8Z7qcJruFYZ6TUbDihP2ZRmKiwUUBtuqaNL9CxWRVf9KfTWjP8GjtHYVrkdPQG9Ng5eUYs1g9axkx",
  "key39": "df7NfriU7dGDqckN1phdkKDTXAoT5wpizgsBYFCms4RUzbfEtU45NpeugGPJKYPziKTENfYaPVnvnjyNzokwofK",
  "key40": "3Y4aFsh1NZbSu54KTW2gKRtKSvSQGBzskNm1iTmVqgNTjfPHCe7WvpPFPeLTe1daKX39xsMSV8d6AK9p7g9KJyim",
  "key41": "5g8shWjntTWLJkmRwW9G6KWurd1cPxpvHCjqtuELoK4443UZSqt8o4GJB8QMWoDRkno2wNEKSRMJNbnSqFes7MpA",
  "key42": "j7MCGY6pprGuKd7bu5x516QbZMavst2hQAKa2xUmQUJf1Z6JywTwyM7LsQ3FCSsySxTWvVMPfvmJbzsi8dcVx1G",
  "key43": "44ehgVkhyxT49gdvL3Ea4dWF9CpXjPdZi5ffBwki9yfHPZ4V8NdgDycPPnq3CBfD2QkLHyDnB4tvbpeSXppK6HRY",
  "key44": "219h3dYYduNFKXzTZMw12WWLpHKJbEnz2EmXN76cBRQTd35pWbM3ip1xi7omhpYgc3jxabYejKzukAqEacFx31LA",
  "key45": "4AyV2Q7tW1udtWbs8RQ8xPtUbGT58kn3NExCQJMHEZ8k2bCW1meBkFdix7yzWC4CTAHuFK2HD2TyahSreWR3QuWv"
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
