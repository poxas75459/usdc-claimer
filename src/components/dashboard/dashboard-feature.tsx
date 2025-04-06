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
    "2NEvnBfywAW8kFBqMyCFosdHk2WmXWXvuaXh4QJh51UGem2iA2xnQ85967J2baM3cn3MdxV7hGQCVF9EqWhz5DCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSoEnWtauuKwwwLHK73L6a7fzCQKHpjwvZbCBResxTbUUKYz64QQbvqUp9pM2E3vmqucGAByFh1yxMpnKMmKcMU",
  "key1": "51dSSCCQtPeRr9HBQbCb3FRbRCE1RwCEVjR91qhUSTGYUSKG6jvBxS7wmJadBWNfNUWScicpFHwbXef1iZy3ueG",
  "key2": "EzSLQGqjaH5UdJHt8Mrj9BMFpAoUWzwXg2DSrz63fah2QZQxMVUb1aTzGUSj34AxER86wbY6GTsJkpjc2HoSbD9",
  "key3": "57qeNF6NbfkTeTSpwmRqL1Wq8Tbnz1ge7b3udbwizkaWrtFSGavuZv56EGGrdmvcdsDMescTnqQmHEnqJ5x7yMbs",
  "key4": "2WeaCvjbHUfLRWP7dHCe4VvCFa6sbEv5R9zdaMv73XXhp9PQKf9nY9B2HhsG1S3cggW9K5mbCa5Qv4GSvuXZPBqh",
  "key5": "671k4h8i8xLbB8doJwaWKndJqo3RNjTUidZpY6p8dT761sBYExtgLHaJfzqwZ5PT8BLD82deNadUmdA3oLjUAXx2",
  "key6": "3i8bw1GWBKEoFu3bh4zUDiTZb5f5tPay5tozxHJJ4PC3dKQNw8eGHWqe3BkV4c7jCqX3UkvMrUatasYzFjeVRT3W",
  "key7": "4zoKztYBCk3xTJ1jfEsoCjvZMqjmT6FD66mTTWqce6xfkZuyqr7bMGYVHodu4nHddJJQ5P2ZyZYLU2QXUz8C1GSS",
  "key8": "3rAhv7twh3b7sfWVcHYm6XhuP9mNosKWAdeXiVTTmCTd3pYuNbJpoR8ZPLnwGWjqqpDGiCQr1TsGXDPvcmJaDbbR",
  "key9": "3tcgjYZNMygeYjqF73b55HDProExW1nURmz7g3keYU7fzYoqLK482y7aKewpyLw7YDk4MBedG2sEKtuG7PHG5QrP",
  "key10": "2zoKHKtwJgAAPx4bknHQEwb52JC9ubZzfCBdUAvxhydaQRJZxW8ti9QXZhhs3ts2eiXmWwQzKiFD8oYCRtGcrSx4",
  "key11": "5vQiV9BFFqnXC7MX1izGYP6ycdDQ26w3HGfAgUHnPRR9vvg9qipCgnuvNyaQ2yteKbTYbRBdvbUojumx2p8Q37ZU",
  "key12": "5T74LtEarBqw3Fv67FKiT76oH9ukhHjSa2BY3BrGNJjrdf6ncjqegZSVVt2Q8NS4fX32U88e9H4SNQKMBaCHFRg5",
  "key13": "8CMSe46cQru9Eg6kfU4GyMf9FwWEvEnsXMEYcBDovTdGXrbTrZ8yN3h3keghmcChdQWE7reqNtUroVakUhu2PX9",
  "key14": "znEFoqbSpikYZpvdbeScGoReVqDt52HsaWShoX3C6Nf11PjHzGXgRDVeUubXYAsteRdZ8c2irroojSoswRhLk3h",
  "key15": "2TRniaCZ1wT5M6weTXB6uKoSCvtRsdfd8xvZMfZiWJsDn6cRLd42MB7b9ZkuYAFCsX3iYiANDHrAotkDyz7oWRcT",
  "key16": "3GjziJgoY2DgZ5mPFyrTh7isVEfJWA87r6YigvzgUNDrEFWEL7FBz3SY4MSrv59obHgdXUkuX3YGH8WkdHZ4HywL",
  "key17": "4FbAHH4desDcDzXHMBuVeYXxRxwtvquQztGKv29F4wHjzvdAKdKAZ3Rej1osdJkmN1A1eiuW35gsF3fmaCu4MzjZ",
  "key18": "2uHjELCDMQQCqgpsConAsKwUoMagDirP5cqGbwPYaj3or1MkKpSJS6ipBQiPZMwsU639CnWWm72C7opT7hhMtxdr",
  "key19": "BQ41MVnD4T3Sf8opdwnwaU5z9VqxXKehTaMcF8NmdABpycD9MojZtPGExwzNSLnVzt7NsLojDCGNyauDPZZ4Xeo",
  "key20": "5d3LQvzJzxNTpnKhyxseeDuvDjUY4wGq8JGuvW5RmRtzjoeXV3oojsRJE5LSNStUfx1aFx8SEuQSFpx5hcYErqhq",
  "key21": "3i15F28zuNarFciomaWswomtjne4gZGFHJxTV2kNvB2qxy8eGSMgc2VyTv9kTMazucgu7feeYrfuXENpM3f9G15",
  "key22": "Js6mg6nb1txikuAgka51EgLMAzBaZ3zJwmEsQLdtnFuVTAfAdRV7isZ1JsECcJCAexyqUd9AgzYT7jQyTwV3AtK",
  "key23": "4HqCx3uKSuEMQMX3XqodHEVZYVgNFntjrxdZhMJtuvUGSSHe9oojVoeKv4Cek249zgeERQCD3Tv7KZ7uhN2WRabn",
  "key24": "48fk5p9y3YHSoS6RkTU5zCPXRJH8Apjdca6sxkiE8xd8WqkuxdAUeRHDmXyzenWshhpmT65mrVXUtxKaYANpZrmV",
  "key25": "MGr1ci2GBJwAraDViWckx5KNpkDgRxMJ5xz21Hcb6Kgw6sHA5Uzdbuy6ajNv6QNUzCzbRN2bB1zPEfJuwDEkome",
  "key26": "3kBUETunip7njaZLRA7svfTZC7VF6pd7LKymX4GBhJm1h9cryieDxCn7SDJUfRpEbErr4wEVQKNV46MWsJhdvFD6",
  "key27": "qQWbq8FMYUVZ5KBMum6MEL86orcq7tqS7BPLNmGTwYknAQWEhikx4orCxwafFowjAKM8SSYZ6bkTuWw77zcSW8f",
  "key28": "2YNTdx1BuNydVKgbR4HL2My8iD5xfgmFqZWspxUc17vh2dARjnHNik3n9MKCjPwTYgzpYdkipi9eQhTFWdrJYmRo",
  "key29": "5ABM5BUc8xmKD4Ngn5MqriUTY1yzaKkyKA7EL5tiABikZtFsnXcK548iSBmELEK1Vbuz2y2TWAf1yJokjbb1fUp8",
  "key30": "2LfLsszNkua7dKWqGonx3hc2dQZWNKLdCDSrUxqD76pjyPGmAgGptTt9w1Jj8DyU4oowGRBfKPF99qM5sCVwBA39",
  "key31": "5hJWXZvaAzzEGE76BjZm8qD8df4oW4nd1D54AoBZVEBqJMaMQbY8DRg36sAR815nRWMaNKj985CCt6Pt191TGEA9",
  "key32": "4FfyWLPGTrsj4ZwLpq9JGMddQY7YbWYSFbLdYWNze2n3kGGJDXCtnVNhj7oQ1XTbjsB96tBEYvkcwoFhHDhVkwYG",
  "key33": "3D2kRLGMu4xpSbrh1m4ktZVGmqHbwT5qpscheniNcm52jxnTh6aSD3KeRA6ZvvGZahsziSSX9ntEUteFno9hQUnZ",
  "key34": "5n4iKjA3ku93PtSymeK1Sny8tqRW2ypgPkRwHwiavGvdcojW2NVLLbTLVJ82Y2xsYCnQX2Pco3wakcq1VSYk1hR6",
  "key35": "4mJP7f8C78UznYNDo3drxeR4uqPEbVaUAuxfeAcw7ULNSDfrSURcbJrpYPCzQPqAaKFuG3V87VG4LqQgAEq5saxw"
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
