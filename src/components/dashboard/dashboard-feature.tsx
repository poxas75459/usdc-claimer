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
    "4R3bvoS5J9gSLmVRvqy8FmoLobGStVVMRueHqAfGCqbTmt1VZQR6C7aXYiY6WNG6z6PgdGeUpVJrb1jMj7bAuvxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9sUdyV2Jn6EY1t13kzXKdTh2FEN9ELS8jaPwQiV8RuX8WwqgZPpAMUbCQNi79iRn3bVQS5ivTTxK8TDEj7DvBY",
  "key1": "3LQvBUupgJVeG1JP5FqRgw3rZRDypc7uVkw2yH8oTKC7TpnRvDfgAwkNDiot3A1dUE4BV8X8Yu9EZTwh1wbE9JHd",
  "key2": "58HCa2HxDvHoZkx4v9hPsaZdq4CGuuMZdM3X7QsvnDs7cBbimGLU2MQmZCMmUFA2kJeBBZLd57kHubq3r7QgDncU",
  "key3": "47bzPdjG9P6TyERH1FvibXckyxaiBD9xyqjLa8LxX8fv2A4qwaLrbi9PcwRdwB7xNQ4GyGCp8ZgGkDEVkK6yopRH",
  "key4": "4D4L1V4XLAdUQQ6SHiRb3N4XSdzFAHRBW5npoooyWXCNaNvNWnax4qnGwwbwH6Sp8jiRtYyt7gQ3swyLquUrV2B8",
  "key5": "WD5koDtbSB8uGZxpBkzMnMEmRESyd6152rBXaWSaKR24dcMrzyFpq5ZKeQ4BACEXTEqnMen3SvRw25mHt6sVRRj",
  "key6": "3i3DzL46DUwL7JpsHUYoFUYa53MjQ3NToEX23CsT6o1gHtpWDuxRNdXWy1iao6FbkUJ9zV3YtH3rUJ67qSBmU7sc",
  "key7": "c8HSfCorbWhukuSd5af2J9eDNKx5PgwK7E4CDyn8Vb8QKenFHkg2PJRszRuJo6epav2XSVrPMektMRstt3PW4e6",
  "key8": "4oVLTHiUKUVgM14nRCHGZxYn56s8zFQHqbuBJ3iinAz5AQPRP8oB3c4zFTn9GRdMfumQUGgaCUsn7aSJH2NmAUv8",
  "key9": "5wBosD5qGyKijEhmXhuAsP6Rg2HdJ8Th7Bx276xEt9vkQv7JLunPRsNikp8bWXGXAWzhS2UnERXTBLNduEnWiKof",
  "key10": "3hBMERSSycsbpYLy87YoEAM7kBTgaauEf1KWsh6RFmQBspGZad2QYbbuvadWSpDWd2qgXpw1Y4eUL4p29Kgm1V9C",
  "key11": "4PcDtQTxtZq4kcsUPv36fxjVxc6TktE393UpAtQF1QAfBHVhgwjJTnxkM6vBNimXtBhtypgN3EsJ5i7vJ2QX2MMS",
  "key12": "4uYd1DhFHdK7MYvwiiajKZTDT6xPVFaoe1VkEjZy18qZrmQQNkzpXHSPe5LHuw9Q471QvpPc54JzYTBSJaai5U6Y",
  "key13": "9zbg4saUZpQpCdcJnx9KLRc8S4tKjWfwytf4oMgTmPkKU2R5NqYzXqAwLQiiutjPvkugvtjbva6RJHSj1iswnzp",
  "key14": "42JqRaTxZrNiSnXZsxthHwyv7TGc2FTF4cubKUKRxtnKwt8z7DZDko4XMmTx1QykQ6qFqZ1CzW2jQ68cCfXk4N8c",
  "key15": "4EQkPwuSVCEYfYXRURtmRAHyJ8gExBdRdh5rMNmhvqEYLY5FzgND6MVWpdXJZxvDBorBVtkea4dsBfbfbYopfod1",
  "key16": "5LbCvcmSDbNn9PevgqEvigBAgogW7RQAisdMaULd3pKbVfjqWC2K6R6Cwb9R1QF6p6B81J7nb2MigWJJ2CH6k6FY",
  "key17": "3Ny2aTKeST2f9Wi6G6oMs7bDGaBRqKbozPPg39DdX5BGd399tDMP4hn3dGVXQivctQCps8Fo4aak9yhS7uTgLrsP",
  "key18": "5wUzXqR5sYkmRa3g56yuy5ypbgLExHSDsBm9ZSEzH7pTrXZDqtDJFKSxgVf7gSwEY2cVcjARP2yhB4Hi9SZyvWHP",
  "key19": "4nPY9nrQSR14Q7o3q8t1vikBiXXJp7b73fahVcSFpp9CdLnjchE1AWzsccs3K6mV3odmndJvJxt1aoWD5kEw7Va2",
  "key20": "5ZftPtYcsxVCahmyE2knCMkXbNMvn2Gu5BS25q6izYX4urVYdiwuSr5Gd6VX5umrRaje9SYfvV3q5AhjJdCVxbhs",
  "key21": "m3CJb2X5uboPwEJt9UboBBUerN5YFELeR2eRXS4UNZd1LGL8Ud4z5wWUMsGectNPjwmgof9aJofRekYXBEMVjHx",
  "key22": "5WLnpmtQZGL3B8bPRE2PAP6hy52iZgRDX9PWz41AoVYMuwBnujuaa8V1XxCBk5zYLEiG4p3YGCDdcyhsJAYGKCh2",
  "key23": "2ur6WQknJy2LtV644wYgwZ1QSwJuqg4ddWzFAZDVwxTXmcKUpJV2aP95VKEnUbqxR6LxkXEcowSkhtmXa7MnnS33",
  "key24": "5rRbXgnDmWk4fmEtH8aB8c2L3ggCvHjuRhb7RhHrkCqKV18AvjJTMzwtPUMguBQuQemQDx4TtSuLDhJUiXzULqFC",
  "key25": "JeSMJiamX5sqwqd7Kk4Q459UpceJfbA9LWmKSsqg6VS1Bo1g6oNjjTeReU32C9RZwFprn5Gdx6MjDdH3ofU6bXN",
  "key26": "4ndZEh5cukUf7L2tPtmGWEeeNLNBtQLhFhTa6ZGvA2okz2A2kJXRDYG5ghmbZahS58o2EToWd6NbH3qXwTPpJFuF",
  "key27": "5qFNnWwvB1CmRPuL7At8jhyoasNcSwHBLVQvBVHc1dDSDbefCa5tNPGRD2yAezJCbFKMMDn26FmxNSy8vEMWooza",
  "key28": "cu3NfrkPFEvGmXQ4U536j4jdvYUEaPpS17gVpEiGGmZsaoSEje1qinLfiAt4pPKreGWn56JznfFjfgmhoCpArVy",
  "key29": "2cCqHyuZxwndjHLHrHyj3FU5P6zabaebTbhPqB5piN1WQVSK1gRxhaahCvd6vxKwHc4zHZ8Eg9BxaoWwqk3mqzEU",
  "key30": "QRHxTKrh1nkjDqj7bCd7eHKavVRs3EMYfZbXvXYyt8KN5xsPd41SETfuvm1EyNfAk2FVJDAQPpBNMTFt8QNsDnJ",
  "key31": "zPWMAiM5PeUChsTZzVrYJUCJejdTHt2xxH3GjFXDKupsDHVkUXfz29QTvMu1NFii2joM81WqZuMV4y1B1eWX6Vb",
  "key32": "5D6BWHTLH4r11XwB3B9rJEg8AcTjjQ6oZP6WxwnMWkcdEL1URBta18pBPXzMkJufqTZMriDZN1qAJWxx3JYfmSA1",
  "key33": "4SZnD2khJZfGxNYVyTsRQw9JJ73fVEmGFF7ej4FHBLNtXkWG57iK3ARbSd86JdV1We2TmCz8gyyG6NtsFi3J9D3N",
  "key34": "5t8Ew7CxyjP8P98DChi5BtVkVHDUafX46T866btiPjePyYuRTA58Wnpsn7ReeFae6VAh2vG2suXSXPEuRDDi76gc",
  "key35": "2UzUMvXvjCorR3tanB1VftdpwLeZZPV29d8iPAxa9tBKPvc3iiS7JZToDvJq2dwy9t3BDwfUesHT37tf8DQ5VSxn",
  "key36": "5jzJU49QCvybkissNt542n5jGppEtYGvGYe2x7ujYxrBSk2tLpvVXLkrCU7mJPfMWSdQtzp4E4EjkgMP4PSv4m72",
  "key37": "4UpSgRbM6WveisQcQ8UUk7t2jruPcyHhr5JkViVVWrcAdxV4DZRzMgCJJyYeozQd6vLjZzErZS7Ryt1eNx2EUpbb",
  "key38": "2brpP7yzY7aG2KEC82S2pFkUxy56FWoYQc3SAMPvnQ4qf9Vy5A2bCkfqo9aFmwaagqF9ehrbBcTD91E32bc2henY",
  "key39": "3HdPqLRUMWm7jhE7n7e9r31cyKRNqvPZvMUxhqCaTygPkKmeJXpj9S4H9AMBz3vHpu9uemhbmBVMVLPigAgQYgXM",
  "key40": "wWwWxeXqdVkQ7MuZPZDD1md6BtH8sLBCaRwJNdePaHmA6kirMxUj4kJGtn5qh1KM9f8QpsiEyz2KAt9Xgwn6fNh",
  "key41": "3vAGKquFpoSMzVpULDxrDqBhXV3RXJ3gKiwtU2FTn5jyUQT5EMKMv2BaB5nR3LJRD8VFFDt3obVKBd7R9Yz8zxog",
  "key42": "55PqGHPv6RzZDwJTLBvcLDmz2qM1zVye9CZaoSLT8ouS5eQ6oh7Rsk8X5N4YJ3J1pQfaFXoUE2E1Jtp8Zjqqipru",
  "key43": "bPVFZ1jwYe4H6r4tR9g8d1Q8u9i8rTKFCJ6mgf4YP8Qoj6WKK9gD71d4B51VvHUnKMnbK4ZgbuQ7tJhX6bwQvPs"
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
