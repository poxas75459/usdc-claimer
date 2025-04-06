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
    "3Qc8aJTfvHULrduq3Lckfuuirn8hL53tZCTDs2NGes8QvMe2xV1TmifonpdVHGjW4Ry4vTVc3tMxshhiiLXr85Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVLxeogq1HGi2XfaBt4cjoLJp1fe7MwwEzdaJHLn3JAL1LUxKySzKLHfUUYfydHY1qk8vyVhF3R1C6gMCVXk3So",
  "key1": "3NUGZbyzrF6B9E1jFzDTJyip6x1w8wpE4AYAJgMEo3HLPdzmrGhfstbqFb57v2jjTnc1ncwSduNJ585G2KNBEX8c",
  "key2": "5Njj9xn5JdqosA28e8xZ6mBbmvfcgeGvUukuigeB8pBAy485FwnFDM1tyieinZwpiTbFHkvHttTK7iewmAydVUd7",
  "key3": "3d2Um6g1BGYSPpJ94LNfode8uNFpDrYVFPuiW3Dg3UCcGxHLeLTN7siWH5mjrvDDvjYW9eQmR4JiqBEZpxmGNbW3",
  "key4": "2pixaacxiEH2RVjiPP713EnmwxWhg4vVE9svprZGQZyfkkm9p86mpEYfMDsnJe7RdregJJRgms6B9XC3QsCWBw98",
  "key5": "4hPjnUooANzYxQ1q4qRo8pjPSStVC3Qj1wX8684sPMW7F2wvEomTrLfCTh3CvjUxNTxjKHMhKioxKwvevyje1crW",
  "key6": "45dLzeZeVeYR6tr11Pr2Z8zXZauZMDNefregmw6c3EJPiMdXV8CHuGAed4bTjFWs2UHbSvdvVZANoSEHLufFPu14",
  "key7": "3okAcCAwaL9RsVsZWHzX66VV3c7x7FDHnJatnrBBCPV2Kv3pgKt3oHnkNpMtjaSVSeyU5upgaPERLTRuR12AgJo6",
  "key8": "3Yy9MeGRvC6pAEY3Xo4k6XgThQGz5gaSbawFx1H1VHjUNygR7DRK32k4Q7UuvxrrVYrsThwDxV9vmPBrpkuS1v5i",
  "key9": "3F1wo68mi8nncrv77b3LgXpPJqLn8Xn7SDSa9oM4jkf3atJgrTW53kXsgP5V2r5HLduZJY1WommPiHWSVVd51HXF",
  "key10": "3951rHRoLGeLAsRJDqsvnHhR6LQgAA5Bz9StKVoBB5Po1kWrMZdHsT6cpUkzHSt2caGiRxCL6wa6cp13ucJSNiSZ",
  "key11": "5A9tFZRj34nyikEUiSVYm36EoqFkxQ1T6zfVJPTVgAE7BUeNaViixHckGXV6xpiWyyEk6EdqE33iNLfPgvntMq9m",
  "key12": "jKqrCAZ4QupdAbrLYP2K2VNGtuHSPr66mb8jfuGwf95Lo7dKHNJUTatdwPPvKwniHCncXxaYQbQULZub8qinURQ",
  "key13": "3Pwob9gro1fLCjCL6GjtCmiseFHvnDiTayFHuUKHnPwV2kzh43X5A7URGd6VB6uNKJkqsvAJTLr4NRHSkFxdUtXn",
  "key14": "5JH6m7vgwg29LdP8Wiify6mr9BapunMEa9J2vb9K4Wnhsdm8EZj5t1F3jnHDDLRtBGZUHw3ABt41D7Yvpo6UrE3Y",
  "key15": "5drGgkFvMP9BAqFmgbjD599hH6FXg9W9UeqZyq9NvV6MQwvfexBgHWrKxzav5HL1MkgU1XDEGTtSKCSKa7x49nto",
  "key16": "3Pc9cxBtB84ZSnN4ASRiN8JhsEo3ACCD68HtXHhfSTeqdBKWYR5bnNT9XvTkXhjjUk4fyFaC56D1yhrCbspYnGCQ",
  "key17": "5baPrCTzzf3C53usHj7YCNzuikjdz6R1cKkNURPaFPdj8B5chRrxn4bhMf2bFYfQin9wDYQi2pWwEBY3KrZTu1ok",
  "key18": "2p5BKqaRCvBhQy9GPDcTtCBrR1XYqE31vFiEWfipmKXF4xwNeqHWKsd39CchCJfCofm6Qnac65UDFWhEPGyjsDqt",
  "key19": "LGhSPDSbAfisNKV7yeXE8vXu1c6GRYC1pLcDq5xeSNxDXKohPaFb2HiZnQExwMdJo6UHabwqHFuTjAZci5uMdym",
  "key20": "2q82Eox6TzQ8XFrKyu2mdxmNabkaqgc254TkBWVPVW1CxfWs6PKxmsyZEbScM961Qh7czxWgJbEGHh7rAcLQazKh",
  "key21": "5L7TmyQE95Tjn3jLSAqVZn5itEv9AH7PtRphmouGGc3P3PMEaRFMpbaGMKdJs8UqMZoBkUbX8GXRLcEv2CY9MTtX",
  "key22": "3YjaR1u3YL6SCHrZE3yg1Y2YgfeRzmBu7wRFkcycLBtUwwEnAc46f9WQAPykJcS1sopRu2A4Joq1srR8q4gPrdFx",
  "key23": "4wWbDAEG7iZkJHZnrDQv2DwPZFsAzYp4WnYqDbCedm92C62MAtpmMKQZBs9qRMvnExyZjmC87o4Tg486oX2b9LBr",
  "key24": "yk5YAkeBzFxSkFEbhuXFVj4VUV5V6JLuc5pEhCoA9a3gtNBQYMLKsoZM1CR2tzRftV5bz846LGRxtCSxsEoNU7k",
  "key25": "47UR7Zprp7XZKg3EVnxSzbQp7NnwMcUf7zAabDixenYthFjPr7GMCAdyHteEm2M5yRDnw7cUKFKi1vTHJUgqjgjZ",
  "key26": "2JiEy3QF7stXdSCTYfHX8pZPvgCtEheVCQ5hYjMRMzhnJzuf9BzxJMBnmQDcKpcPbH3Mc4PpPrjwN5y3byExaQGB"
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
