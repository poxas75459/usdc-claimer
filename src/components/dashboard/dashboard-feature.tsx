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
    "nCdJAPnaSvjHQxu6hFbdEzTMjzjJCdabuB3ijgeB3oREFedQnT5pTCiSA9gS5DboFuDENBmrNFAFDcSifWkFEzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wjobi7DrhicCKb7CSj7vrPXxbWLT5kqBQMyGHyaTNsHDYjCiw7MWzHBmJ6aZjmKFnBJV21TdZtaJrLzX8VpsiXa",
  "key1": "Sev1TtrBevge8g6vuiEai1WwBzTXyVyHEazCR6RPyZ2WbLcSkGe5QkqbZq6V9FweJG564nvQDFV2WtC6GFRFRA3",
  "key2": "E2iNt5YFwLSy4giuQNvKY9WY86kqiLCo9haBqn6qk79FydoEwAU1P5q3EUDs84ZgTQARVsAFXYUTED4HsMFX1Hr",
  "key3": "4WV1HgWbAUwjvKCuftmJnD2g3PkYb4YiWzZLyCFHUhpjqN5y5rSsU2cBtuTjShaVH2dELRnPxogzA72oGzupQJGc",
  "key4": "3SmUJunMeJ5ZvoSXGZajvjXwVcczMGhCegYywTPUjoXmXEnJRAAUtQyxCkM6kXRQj9swsEJojQVPBWi38XtGRWKY",
  "key5": "hbrMBbU2fSa5gJnZKj9mV7HUMtMdwekGHdYKBPbmwwBg13aav4B4PJt7b4VyEgBBHmAYPJ2WLQhRR7GHeGPmyAc",
  "key6": "5zjxU51KrpT5jqKBhmTabb7xi3WAFHVRQM5GRvmVxotx1aLug4192Q5gat5VjS2Da6WRhKYeW6oZU2nZB8MtcjbB",
  "key7": "4cgLn7sVvJDBbpguVjLKR2qmRs3ZSd5wNE5SSctN38H5Gk9HthGfykvo51Nsu37FEa795haGuw9YCaGhZvNgsNRf",
  "key8": "KrJvehtbin9yqDTpbV4DS5gLwH96ZeWNb8Q9vUJaEVAncgxWXRhZVs5vJiPs1fK3rJyBWapWqrrmoFxvjNDnfu5",
  "key9": "3NHj2FMbMxGCuZsjiREtfiLy4iWmjscPgXj8GGJy3EDp7DwGfxJcb9zxvRfY8EH7yWodKD5yEQvdpHPHjAb6dF55",
  "key10": "5Hy3D7G3aTzuj4KQjj5s1h8bBK8xokvJ9BAGAKjfA5A39q6VjUuqFdQZKPePGybP2Jvr5qd7cT4yrdY4QsP5odVK",
  "key11": "3AGVLvARnRDXUqVaXR2ynmyK7nQtscRGfWXF2r6SGSnyLpTu2PAYBNXr4fxxrjaL2gYg726gdAN7L24ioScJTnWF",
  "key12": "65BoNJwETT9yckqeVQU9XpzQTxTxHVQANm2EdgRfFkDTm31oUbecuTXonF8nBWkSE2QS7c8QWQAGr2eoFhzwLBUj",
  "key13": "5vv168i19J6ckguSSK6h2VyEYxH4b3SSXgTNnCX11t74vHWYxnLEBMf5KmPHNW6hwrry2atQny3FbjhRx9H7NzeT",
  "key14": "5KtJvesAd5bmsDc1wP2Vay36aG2UaQfncx8oW6L9647A5ALENsUwVTFsJd9C1WL5TiiNLQh7sQwHo8YGEG2bnYWN",
  "key15": "37Dyaqir9QkrigttjcJWXiWBwvdenpzYVi4gwcjJmBgFWi3uuSYHeH3pWXS769nxQrw9nhmDAAtSav4ppTLAJPzc",
  "key16": "5V5MD5mutLzRNwjJGrsMRbXcemqdpmY8a9wC4FA5MEe4PcDdWRt9wzih7yxYhprnFjZgwLufhPZeTGMZZu5Dn3ud",
  "key17": "3j3D6jKKw4dHe5cg98iCpvS2bAPKv2cAufcVbHjNCLPXNWN1usQLg5ETv8t8pdEaXbQa21mmLG75Fo7vJhAWaJyY",
  "key18": "6VjKm6zfQ2qMGQxejjznUMw1gdWdwR7akiNrcYQVQUvPVdXctcpuPzifaBgDURK5R3J4umQB1cqdgFD6yCRRS5P",
  "key19": "62oEGQsdqGMAazj8jt9P2aSAwQwCTKEooY2oHoN6rftfpeS6yAmeJcirn9pGeY9GFtUDGb16gV6XYacJTQrkkivj",
  "key20": "5rAZT7svLN49QvocRiXH2SMT6TKxVThPUNacVW3oirQBV5pRocmeuuJvhPHnNSc7fp58PZH6B5yvuCsAwb2pMoV4",
  "key21": "4eMmijtAS4ar58Psc4g44e1qaSzKxhapKt7DV853ujEHuoHKisUp3i321ZwqFrfSK57ZpsT1hDyQvJkXM7PyjRsk",
  "key22": "3ghfNSDN3F3CAqEMjgie7sVZr7byCohEZWwyEJb1LJB7SzeeSGHQFTZveQG6wdvVu1p4MisJhutRpSFv6riSCU3q",
  "key23": "4DYTsR4LPjhm2xhbfHr48Ukrgcut9kreh4NLoKttVynhC2z5b4cfQVH334qtB8oLNF1V9ViRG5vwB4mXg3fwhTKQ",
  "key24": "56pCWSRPPuTVTnegV2CcLjZ4jWJbdfosB1bnbHZaV7sC2KebtzLvUMgLRuHJVoBf5EiE3S6hc68vUExMADVRysiv",
  "key25": "2dx941vGdDwKDtusK5WHnwfgX1n59pTbsBRFudHQpeamQt22HiiWHj5ddsPAqkpLgrXvtSjQUqm8vhTjU4nAXZCk",
  "key26": "3R2fHGjgygn7mmdU3WhDMkCHvRNpwdjUvLVJrGuESfoYV3zRRBdewvH8djywL1dQjrGTJ7Uppq2tMjEPexJ3dNBJ",
  "key27": "5VvDtBXLfE9UvonyyrY3EF4ze1vK9Xytr6e7wSfYS1emAEsAqsQZyz5mCU4yLzzHgTJhk8BzVNA3qKa998DV6JPv",
  "key28": "4NTDCR3KSKB5DFXvB1BRFCqs3K2Ks7PHJyB5WJwqi3r4x8tzGhzrhxkGbRoryoaPequC8BCRAjYh9bBGFijpm1Hh",
  "key29": "21ETF5Rtqja8tXkqhDJy2uXQjuFVuCFuBCo9Uo7FkX2Y1yPucSrE1KhUNHAgSwgx1qekQno2TDztLTJMZyPodbpL",
  "key30": "2pqgZzYanzzQMDtNypVN7NhThjLrycP23c5ySfr7e9MzmnaNb9Qv7BiVuxFwYEcLYAe8hJTVL2eucqAksZAcZ5kM",
  "key31": "2T1sWPC6ezcu2H34koeoxkJ2TQUun3gxeK3KZigHHNXB4DhjZFV2yFQirRLEhWazK258b1KupwC6Qp5KyqwPB3Fd",
  "key32": "vrxhUitqXm72GAdfW85kqaySx3b4rZ2tNJJSpoJmx3F1Tut2oaterDhckoiy3wneZG2sNDPwRhrpifJoD7RFTMK",
  "key33": "4HJDB2enL7BMgtg8qLgdxqGKTc95DWAhRDYgSRNY83hAJfZpuGgPSKtHNwoTCUEaVG7JEbCB8KaF5W3bMDGayRQz",
  "key34": "2w37vGfCNa6nmRzsw7wuBLqsnQP1GRDnvj43QeSYdBKD14ivVmWvvDUgeuEjPKCFadsqiyZ5ViLwLJBnrw5navB5",
  "key35": "5QpmasTeVpJdy9ngDK2ovDwPFU2MhsSqHbWD13yQ255LJPN8HehBcQJo8SKZ7PUr5eWTiK3QJEehiZHVTbXC21LF",
  "key36": "3WG1KUzESGvcW7MSznc2aFSjReR6SbnkVQCqsvoB7KhoQfwScRKYuwzpc82NrApbuc9n3wSjGrZaN5TtvpV3ZvEo",
  "key37": "3FW2HoN9xm3iXtso2sXAHqVLKLE86n2zJQDcS2qTtKY2bvWVEcQoBs8Natw9yh5Eh39KUhwx6xMhziafwQbC3YtY",
  "key38": "3a6gfHhvnr8jfqFWh41S98MyQzPG7VDwy7BuzuYjjbnDzBBJxfEgpEYqufnXatMCAwhRviE5sBjuRcfJ6r3VRScH",
  "key39": "3aRsoBUV3WQyxQYkjzwxWYxev6vt5pYtyuaM5bszbr3W2k9DiQm1q6qmddcYKmhgoUNA5Cmkf7fSkXwDBVJMbhu5",
  "key40": "5VRY83n6BG35NSMEb1JzyXoZdvJjojAJdHf2xLqeg5EyeMzeX3aHGuYGEkRiDAgpWB1c1nakDCfRw6UJhULnhfBz",
  "key41": "En2MSZ2Lx3jxLu1adrhf1bdFLsUikGfDESQud5RBoc2bz5gNTfvD8SUoRPWPJPDFRCU113A3h3SgAHpqWnvrHrT",
  "key42": "2mmKVZEPsbzVJbphgmGxb57dHKTZA9Dhz1gArPAFmLUYnS18PqtSUsX9RCvNWNk1jsMJQaQGavZ2oks9ofQs1cfR"
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
