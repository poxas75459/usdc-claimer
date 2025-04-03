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
    "2hBRjVhKxDMzG7K8ibSp3mLrHfhS8hTFT5cbktNXCfR7G8viQ5rf1Jh4jPJ2u7EbAMeQUHv6AfWNV1ck8mPMhJfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2iCTZQP6nGpPNxS6JU65aoFtoN84vbV4xmvxj9j4LNE8juF68Wz4esf1aPEzzz5Cc3FAPcsMqis5abnH2p7bze",
  "key1": "3V5dFMXdfMztJhMirvx5CSXmmJeHukeNLDnJd6fVEcDRGAPjEssUdWG4pGyEbMBRhADLJzzPYZjQJuzERtUBRbrP",
  "key2": "4qQrgFtyxEVnyF1miktLfp6Xj8Frnz23VJZVF6ZsaGKbUkmobLKKC2bRFp53dsosEZx5DBvyVQ2NTvittAugy9A7",
  "key3": "4uSB85d3sZ2qtkc6JS91HnKtsYk9NmDvPQTzsnsGQUeLjPvFzKmSCVkCMyeUtYZAUFyZC7zkFTYbcqFZWZmkuq6P",
  "key4": "3XVcQx17XQvbrhpobvVrKmEzi567qsRJ38XS81jkFPUkybSf6ReN9jypqRp94UQgBWzTN46NpB39d4AzvTSRmA18",
  "key5": "4uzwnwU8CLgwER6n2dY7gCEGbACcZDykeAyt51oZtqEVGAA2Gf6J1YfNCLbtkGm6BJcCvTLPN8amTbKr99x8hgdA",
  "key6": "hkWMwwSP5w8hhPhotsGEoNRYg8CLx6eZ5kfRpAa8BGXNT2WWEo5E7AzLdGJCDxpNES7W1wRCuc6QcvRcBsY7LdQ",
  "key7": "2kfsPFUzy91m6NXMwbaKJrYWqdEEScKc78ra7jCtBdowViWGnZrNwayNteZc13ysMscfJCyMAhTP3gfM4qDpig1F",
  "key8": "4b5eqHM2fAwHPdMMvbBBUAqpksSdsDuUMLBtbueoEMqvCyB5cG7wEdtWZL3mEng2fV2rAnvWDSu8VS2PdCrtHGcp",
  "key9": "62T3KG8gybwhGJYkaCPLjWT5YGiXB8u5UFgqjqcSjZ1tQv6UPzkpDMck4GJXJ1ydt1JNmR1J8pBytrp72v5rDarU",
  "key10": "2KEe2AviWNtWFtBLAiaNEH1KQZobvWyjLVCUnQEGL5D5195wh7rqsajBNihtPwNfPppPbjxcbTyUJd34dikE3wgT",
  "key11": "5F3h3agYQyMF7Nd6kSTaPeoACPSdctw7kdHFPLmy3bCAaq6ZZ9GRSeP7YENVBbWonJdmdUhW5kHzRgsTVxjDKMDj",
  "key12": "5CExh2vr3ocJog4Bkij1cGQxurdE5fBfBBiUwSHnjfbvWoVPmWn4fn2Q7mfpUdST44oYxfQA8LzC4nzhBgsyQb1g",
  "key13": "i9BZtsgQ4uSqXUc3c7QZJs4mJKvDKaXDsaRtFVDn7AePgfx9LeUZG1fL9w5LibCyS3b5WhNEZ771Vc3LyFpf7ch",
  "key14": "3Cg8xQE7Tf1fWVuQ6MJxn5YRfU3ZJLSPCbdU6LaGDYRLiaH7Cjv6oFhTa9Ar9fQr9Vu8Sdy58cKER3mZ2L6p4j3R",
  "key15": "9WFpYavB97zsn3t5oCbJMLkxwrWzjgrgxvg1pUiJHat4Lz6cGNzFbrMjxERCwyDGygdeX3dNudfWcgxQSrkGZYB",
  "key16": "4Ug2re65JDKqieT4bJKd54g18f1BheDoLrW3qgUSVVdzv4ncWH2Ho1FzJ4UgWGpsaLjXxSMYEwgzhT8SUAxCNWMt",
  "key17": "JJLjYbsyu5ZMsKjUwpdiBABCSnjZESNq5FXMhFeAiLawUiRQ2jkGv6giHmnzNXMz4opBKzvt4CPfbY9qTQic8HU",
  "key18": "2Z63uX1FufXxERF8yZ3Q2kC3JMWHJTBRV8oj5Vu37xKHWAejffGkAZLz1iRbr2YprruPS1qDF4RfQpP8xW4XAKPK",
  "key19": "3WAYTa9Ao3JTyAyaDDhXHVCxQUtbUim9VTcFTzt6xTUZg1CRZcaEFX9TVgnt4rcZ66CJ7cJtf2NLKZxUXvWM6xHE",
  "key20": "dfnhBkL1r1ZxBx34zTivqMGX6qxJxpAn4B1sdzWKJPiFGNx2ag6v28tPfZWXGVgT6jwhf6KAyorrTU7Fu4m6GK8",
  "key21": "4gvhL1ZtgSoefk5QmYtuAmg2D5t3mUzmm39636Cqcd9L9juW65svtFS8HE5QeQ1FfXrQKXbYXvq2JDTFXj55yZX6",
  "key22": "2onxCg8xZ8RNbcNcgQwSeR3JCMGcjzRymuaKWks1bed3gW3zt5m54dVSrBRXX25a7Lswj8PgZLP1Fr9U37WaHqpL",
  "key23": "2R4CeGAX28u9KHD18sQhAb2tpuf65DJvdKe42rastZrsz2r8ni8rSeyPye5ee4vwMycVSyMsX2EgyZ8wwJPEmL52",
  "key24": "4WJMCA3yVYDkaqc86GpanPvR15VaCFShg2DzdCksPGrtR859YRcfnMYaJczftML2xnzGHge5JJGzhdLuETfiGgdJ",
  "key25": "5eHJ9i7tmrJeniQvB9cEctGhn7zV1dtjcjx3LkuRwic7bgS7xvEUPXV2sjr2aub2R3xt7h7msyV51dk8Luw2YSCJ",
  "key26": "5kXSfZoQFfS24GPXqL4LFRKARckUX3GL3HwRP6vVFGMghUgKFFHtvk1tj1VCSwmpUjyxLU36y5A4YdZXAn7TSdNG",
  "key27": "2piC4Quva6R4S5AVK8YgC5WPfe5DRyhtPyX4HrTdJ97YP1NNg6uAGWrnG8w8rdY3w2HKGomuxLqZgW8FrFia4quh",
  "key28": "4RtaN2SiqAH1MyYbn55UZS5S2MYg3eRaZdNiXHXGJZPd7bbMhiZ9Qx4YMcEeobsKAcoZtKrXksjmBK9HzqD5VJkB",
  "key29": "4uqXChapzrw3jmVdBDkGv4VU7T7GhJhvmWMqkyzV57ha8scyfFDsrNRPkejEcF5E5bQDarytZeY29JAGL6TVjNce",
  "key30": "3Xkg3JJFyLWeiNEwdeRRL5pEgwFUBJ49w5ZsHopW9kGZYfHPm6r2G1px8q52MSMUE6eNQAzEjj33kvQLuJ6ch2at",
  "key31": "4ktXjB9EyDDxdhsjxE8qBdVvxNMdABRHPFUtpWvS39swB7eGsU7EoXCNYZVt6p5zsrGgLCYXy7q6FPBgiN3bZ9mA"
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
