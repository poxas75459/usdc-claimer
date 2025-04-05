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
    "4tKuiMecWAvTMc3imUkKgbFReDoczzsPLtNEaVrHEENgFmyTZaYWeWZNN4yd3joDGaBNy9SJdSXNi79Vi12CwHT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCXE4TqNVcoxnGgsS8iuioCiDk8zEvpAEcaJdKoWckKJ6vpkgv93bdgUhTLnsMV9qP2UFT6Ugn4V5VxQ7XbNkhj",
  "key1": "oAMgpWoKXDQRmSDF48HYg42X7vGsMmsELMR1M6x3B1QfwK3UtTSLpdd7spwy9tvLombmHJTaCZK3y1eYJVbaCUw",
  "key2": "4jCGe5vGUFsrWmg9bGmo6SAUwYZs96u6B7b94g7zot3mTYZ2Lcw4hVaSSFJkdNMudJjy97xTgYinuMN9BVZJg9QL",
  "key3": "5SPDiejrJg34eCg7KGsWajoZgtuGhD1J5YZx7uKEvGU89iprXuKYehP3EcJLEciJQbVi7CiheCDwwXa2jDef162n",
  "key4": "3iBhjNw5rxU8Zkd6mbkTAtjK4a8QFdQuXcpMA71nxsKWFauUtohKW6typArHPPN5j7sVZUpdP16GztNZBKDCRPCy",
  "key5": "3RHD9iz1atKLpq43wrkehcwefnp8sH7ZHwfQvfMqkBvNmRmSKPenuik4moDGT6eAgSrVd2M6jMhSQdWBYgpCDnJh",
  "key6": "3EWgkWCePK16Nk9FV4ENwEf5teB2uKpmuvkQgcpKuWBVzE2cBtXBxuiEGN2m1GSPYrq6ziqh3t9hEEdXQrZFz1AG",
  "key7": "4Fv177Mv9BGw3nCX13appG6PzQWNcHpFsZrebjnu1xTzbLpzeStcNjSGiPLJHWLrQe9LD8Jj5cRETcaXyNoRBAVM",
  "key8": "2p2Bncusj8Kf8WSXbJCg7regfAnpo7f2u3qtzw9icj9iQZGfKi1JNWnatz8ZBMa9dChQbgvezsdM1MMTk2VRuZ1Q",
  "key9": "4yz2SkVQHAibsuEUHdjexJUwdSACD33fuoW72k5zwmNi7ftkGehkN43taTNr3RpE67pSB3oSURfPUgNk5d7sHHfn",
  "key10": "5YxoP5fqHHyNMgKJY6n3rids9a4UZ1kdS7RJpGXMUrxXw5B9bPCu4ETxTgfuvzEtky8tReSNJu2NYDCJU44FYhgs",
  "key11": "uoCcapARzQgRq6anY8CPs4cSpRBVfbJyzDu755oRFoQW7ui8eDa8NVYecL7Mzpms3MUCFqoeP1GTMcf8ua7iQgp",
  "key12": "477aqtv63EgPNbVdEKYZF3F2541zWHpxvY6fcG94JoCXShKZGCVUbuq75ejfSbrqDPB7WY88GrKvjNfF5zQWLmve",
  "key13": "FbT3pmsT8VQCfQQVqiBTPSP4reZH3qMbDbJgjvAus4dVwseZ86jqmF1ZGSZm7qT7yGjsXWc6n9QSVCM7PXJr1yV",
  "key14": "7Zn1t6zaKgaJodnvvafE7gByqNcFDmba527LCnJqhXDnimDBzAAvTshEQcTWyR1xfQqfdxninHXw799MCEh1unX",
  "key15": "2kCvAx2fLmVK6EYFCyQg96R4A6dSZ971gny33pr219biEhdPMzim4KfKML947LFrpwmvRofTsDsp2DW1kEavVqv8",
  "key16": "2gNCemSFVZA9aBX5ECm9BYm8Ro7NFzuqPPb19CNCR7aS2zjiuaKaiKAeZ3dM1mUjCeTS2xMQVvukaSBTzrZv3CxB",
  "key17": "fx5XNgT1WtXaHqU2mX2A3FinfjYGvXphcQicoXS2JCn3ypiCwWpQphwb2Hp6XHJD8fW463Dtx4v5PXChxonGJHG",
  "key18": "5d5Nb1n8K2F8EHwDusi75zmPeiXWKEpz5ZpKrG4SSUhc22TbaXWNVgmUdQzLPgH7HGZAAd6UH6ZQYv6bP6WdJedq",
  "key19": "4LzPEcZmLiWzivzg6MHaC5Cq53soKpVDhSAoPqVwnyVcZucFwM5YpBRM9BtdMyYFVmqbmsEBKEBp2sBb3vGP7bFW",
  "key20": "41Q6jVZsyXrEmuxwW8ANjZbvUatVw8wpi1jPUEm9rG6Akda9j27ND42dQbtJXGwve6sLW1A3oaeXARcioENYwC4V",
  "key21": "5uAFQ4LkkeGqkj7CmQWCWjadVtg4LKk4DseyjVJNQ7HoEChMUgQvV1MrGfWf1LtHBg9duqVUgRLXheDNf4unQBGD",
  "key22": "2EfeKTtBp4kr4nmmtq9Jh7Jt1bspnwBEUzr6QwTLthWqnWASqwwLZk31Ag4dX3s2N1jNdVx5Sc1DogJsrEA4sPSQ",
  "key23": "5Hs21KWpeCK6SBHR4jG6G44419kpBFyTnApM2KCpo7WLi8ipeZf2pTPakReypN8o7huKicHCJy4dbFUx3HZLQ97H",
  "key24": "3M4BdUT8djwncnV5UFeS1oX4q49GoqSSGvMwCgjKqKgninb71eppJS7dddBibvMMBqpgCK49vZA8Sv9E5WLizkjZ",
  "key25": "aZF71WPefzaJ2XiG67cGuY689ZBBUgicNjaTAiwd3mckiwusxNBTYZKHP8Tr8LW4QoR97dWdRvdGDz3A9vgcwEi",
  "key26": "39fcC7LxBQV13GmeFyP6i9AkmwXFYhZhhiMg7zNBWKPWm5c69qb39fafsf53WkCugq8U25nVp13FFW1Skhvfyu7C",
  "key27": "4xR29WLXsohEdjTCMmn3ZMvWtNqgJCHvp34KoFwVgzczWMJYRQMS3ebMxwVEGrbAFCLdrzqxANUU9aRkibNv4rgN",
  "key28": "36yoEdYwpCV6W7i84ABXnoMvpNbtFdYVxywtDpVuSNZGBe27Mz7apFTFba5yM5KFPVDWxMs6EQRvPYGuGtmFtLNo",
  "key29": "5jY7AVQrQxUdf12aGnYWuwJ8mAUfRitrxmEck31v9y5ALUyU8xVPMtZifcB15ziQajW5feGGWTbXqRdrxnHTDGmx",
  "key30": "39KxssmMHi48gNTpP24dLfJK3VH75BhBkeyDH6JiDHChUchW21nMN2fY19dp52DrZpBq9VuBKJxdg7PKRKtknuw2",
  "key31": "44cHaXZ5SfxRPGmQZauEp9PvmgFmwbhtP1zSx2CAxwGBYkjasXCTFCr4dT88eLgKhWCrbB4y9HjAJg2R1NvYBfd1",
  "key32": "21bCYV8zrF1JRyGLkE9mjmKANaDzxZRg5ukiPhpRqgkyd8JuQu66EAJ6adPVDz2h5T39JsC2r11pbWn7oeEozhYo",
  "key33": "3pyKCFyUCUsCHeEVe4URcyqDJFuQ78TBUVtHF5Dm1nukEo93qdvFteAZYzKJbwT3c45fbaTaoe2UGJbj1M7ck8H8",
  "key34": "8KPK3VKreHJV7DYf4ckukWGez4RhqyGdweYzRnXTE7hWux4Kk3EJuEiMmzHrLxs1FSj4Sur4vthKVibEjpvqQKF",
  "key35": "3yH8JA5Fdpytzwy3UeyeHpsSmieViaVManct6fdVCjp2QKFp4yciVTzLQT4BXUgxvAdu17wjjUu5agpRUtxdt6tL",
  "key36": "5bFad6wGgynA8qW1HkZq3AjYCe2eCDdjfaojzNS9hNPkTxFsr8tu2gHeMPUMpFLuf5NSAnAh7mLaaK9kySCyfSW5",
  "key37": "2tBYJwcwnJZNxruRmJAEjqo9fupxdVxC2wkJBgTHCqFQcwiN3v6KTWHtaS4SLNrAV6xbrP2ujZxhkBWLeKamXSSB",
  "key38": "8m3pyLDgdyZBLTzcuFaYa9adVqwCqJCAKd4KG2k66vA9LoUTtKmbLF2G8YnZGCmFHXybmMBymZEUaiXXZtxVfuD",
  "key39": "49kGgkdPZ7y4fhWaQqyFy3Kzo7kAGSS5EVhs7cyCSbkwKpeuUSQUmsY8NeVVj2Zc1BsQ4HJdWonDmcQnpxBQgyLJ",
  "key40": "5suycQycWYf1NcmhZgmbLMdYPm6dHJwS6QNcTqdGi32WGRPebQazPMiWjxR56FqKtQbeZafMp85hCqEASUqActJb",
  "key41": "FY7rJuXqW8KZF7wmPcVcCKNcS55qcqrKKmgLHDzuBFyAA21zN5mgq6G9YVkaukP6G88BPhSTFW5s7rcJiyJ1ZuC",
  "key42": "5bV956PJxe9N1ebkDeSFzGSDK7yUDX71ekaZhyuQUyJx3S7AXampJ8QKyVcss48Yv3MU5uuedbKJo7rp9BjAwNu6",
  "key43": "FhQJx3mnRZHhh2j6R1EiVFzeBPSaoKyfZ1r5asjC7q6pq3MAeCdzd7753oiSnnQ2pygERzGUcAMZA4viBqnCTMa",
  "key44": "2x7kbH7T42Vcg8S28yrbkkTkdEEfK6imKFErQBoP8JJYtQsHeZLob1g5vGGpjksgKaYS2UhqXtRyaEoPSPHqZeW8"
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
