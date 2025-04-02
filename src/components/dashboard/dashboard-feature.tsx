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
    "4vNT245nCPbACJekXRBjocYYaZJ3NnpEYy1hNwj8Wu6LxTZozRW2bWmsHATNaueaoWpQyqqkrJ6K9hRMMxRf5hrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F682yJCCTqifqvJKH5CbihAcso488ymEmRXmMyyLuXQTscMTxyQEWzbXeYu82q7CTxbjfXhxtMsDdo7t8m45gcH",
  "key1": "4rYdjD5FRXNkW5KZ4AhJHwmQhncPxvm6Vw7VFgNLiHYMrjofkeU35iK5aDUQZn7p3JBkXUH4G2GRaScZ53qFEk3d",
  "key2": "3Nst8UeiMCHaQDrZnrPp2UrKx1pFpnmjCzG3EPVLuVNk14mP92NJdVoR9iVRu2DZ3Hg7Xbvyb5Ek2QW5kVGb4XJj",
  "key3": "K1vEuFu2wT2avYByi5nwyaD2aS1Ce5K2fEvDWNRuPZAraQzMe7pcvTURfNEpfJh2VR5ffxPSpn8zyjpbjawmPLU",
  "key4": "2Rad6droGhvoTgjZkVu6Mo5xutPXBRQbHJgXsKBSv1Dr8mLvUpkYi4SUYeSk16DEKPgMf5g4aZaFxACY8r2YCeWG",
  "key5": "49kMFXx9WLBm4a751bqGBapSaP3q9zbNCSY21mbDj4QWkCb95ps6Czutc5vpNQpe616fBzpvPh1VieExbNo7SXSq",
  "key6": "3fkFKhvrmZs5Gf12YLSP5dz4ZvGrz5xKt3TZcGMJ5qN4o2qen5x3dFgLjVXa1WoPCZna4Rz9SdbfzUccojx9VkBH",
  "key7": "3Xr8ig4uGJUdPCiX3kEPi3bLujt899nRcUhv3DyZuvfaJYq9np851Gnm97w1yHsbwvMwvWysTJqqUpapsM9kDf7Q",
  "key8": "2bTuiXiR9xERomNZpYG1fqdV2diuvoAHkTkBnv5cve7gyiYeDtVthsDtNRMvcj2HEyNCP3CfRQYfcR7C3wbELH9p",
  "key9": "3EQ38Vswuws9Wo6iZ1bUqAQuEF3DZuWLVR5NweWnHS2MyvkiUNKDXgxs71M7mZftC4gsvGGVpRWuxxp27UFNFcwv",
  "key10": "qXAnMvH1uwqczbQFLU8WAeDyu27TF2AqTZHe6gdMuFVLgaAvoVasb5vLSEULAMTmY4ic4Fn14BA56JF86ecGLtN",
  "key11": "XZ6kQcCcRkZzcDCa4jMzXAZ9VMio5DmMxw6pDSYmCLPk8HKcGm8Qc6dnixL4qmse9UuaSRsjkkTbSDZBE4QKnWD",
  "key12": "3C5JwfKpUU8Tmx1tEh7WBt9qjrmPMLhNNaKqHHgLgCaNmfAEjXymGHjAXeZnkqLqaEcRAuwG738PPZXrKdqkSuem",
  "key13": "2QkHaVnwzKbgPfhcK6qFkABEqLtF6eqMZShkN8eN7nT92QwcCM7LNYAB63Lu9zu7HeX53EjZUzBpHNWpUPoJYWSf",
  "key14": "YzWG5FQ5Gy5H1dFXry9LV1SsCHn27nCjDQrBaXRozchMC4tUbNXhho61Y4LzAWj7aJaA55Uij8QJ4iu3TSevXwC",
  "key15": "2sHjpHZEVDj5sJinsCswV2zp47Li2nNuhSnH6Zy8FNcSEqPCKj93VBbHU9AxyQELp6tLHkKzVse7cf5KyEUaqXDK",
  "key16": "2hgBMySF8T2didzzeHNHMVCrEUhU3WjtJMQWKfoe4LXnWWpY8SgWN8VrzUeUKSqnmy2rf9EYTDLeoC5YM7jW4tJc",
  "key17": "2wDtD3zR1ynNky8nH1NWeoAP8cHvodbGTfuRqGiJzViqtrvBbNzDsCVA2E3JRMU9a2Hp8jyyGNfzinQRn1bDwLgA",
  "key18": "5FXMSjo4opKX5Uj2F7dtbzYD5BcdJMMzxKk273JPFmrSzNPwxA4d2KXifttfe3CFgLFB49d48hkK5wHy71uxKJ2w",
  "key19": "AGAkPuYDCcK8C7TpxPbLY1PAkjGSqrTMQEnAoZRRsGkTA5cXe2NZUiqQ6PV6TcQnH9Q5dL7HMC3AEUsecmA23E1",
  "key20": "2X7jFNUkadFCZ9SbvgVrJMkKyVweKj4TNyYUKob7hjK2CJLa8mTDwGU2o7bRHi57wP42gA3aTm3ypsc1jpJpWSp9",
  "key21": "4MUc2XcxMYeZhb88mHGgv3n9WxipW2GEbwxB2KrvLHobwVS8w1WSkNVxoT2NzNBFmDuvDLERy7e3GcLNTwknavvA",
  "key22": "4imcF89wM85krZW3aTSbyyWivFuhewm9JZDKMgW9nSRZis9E7C6UMkYNsDh9gdk65PsA6ND4PcH86HzgrS5NjYJv",
  "key23": "2adU78MpEzu8zUVXE6rwSKosiSw1N9moD4Ln3sBWKTq9Kv5CGWdCE9AqTB2ucchWBtshVau2EAiDu8aTJdNux5x7",
  "key24": "3EagWK63FS6i85K6ZkXS48BqMvcPVjs7jXQBwwy3rofLSMwDTkw6o7ozSj45cHFfWevZTCkMtfPkBW3o7iAsKiTC",
  "key25": "43ycCwChS9294GDmzDpYZrroe19cJnsQYwtVUEfE8Toe8NKVoWkXP4UxzVixV3UeQFL9Lmchb16YhLZ4AxbNKDR5",
  "key26": "5cypEFs6PDqmaB6e9mAX5fLDQ31gKy2dsdJXGALbKC98Ws4izbqS7aKsmbRG3MUnkr6zw4fXcyJuphbD7e7hSVxX",
  "key27": "3FQvFLgFEsJMpJQ2SYeDFSHU48ZehkJMPV55M9j1aea6ruHecHwwHMcJC54nVBHjpjy4gYDiAcfhCiAYtxt2V9HL",
  "key28": "3bY5xts6JjgFpjtK57Ehmw5saXkquNMdHXYD4eenMDNiXCU4d7X41mFTzc3Yzq29Q8zTzB5YgJCzAwxwMhYUDaza",
  "key29": "5FdXeLZXfUNboNqMmfb3oK6QLrHCFyHLS7P58e4FVJV5gpNJ8k2dp92XVDXveW4dxZuN9w5HTa1oP6tmr6q3mJp9",
  "key30": "3b8QsyPD56xvB6sTNxrN4dUEB9YJz5wXK3QZcYk8tvcaxSEdhreMC8eNjHPDscCkDPb6DXQ4zJif1c9RDQUJiXR",
  "key31": "SUgUKS5sKznK8jSBWjyJ32njHYsXDEVRNjEqpnTcbUdQvRrdVRfEWFuUYc4ZmqNKE3b2Q6x9QhxGGUEMGM2rikH",
  "key32": "4xBiwFHje3rMZj1gGFYUn6CsUz7ZWAzBwXo6BFLzusFynmghokCFBWMajyWpiMDFLvVvWWSqxi1rUZvv5E1Wjoft",
  "key33": "5LjyaPhUBbbJtfQT46dM5ieaVXUtGA6J6BNgWdGD7JFgJPgQHSjBd2dgG9d3VeC6C3KDFb2L14C2xMSrcthW1ebE"
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
