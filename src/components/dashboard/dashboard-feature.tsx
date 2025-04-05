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
    "gFxaUt2K7BPW4XN8MU4esbsYguZqMN5BbGzc77x3ztxGzcpdaUx9yAUFwL9pJLP88NPQB3zb8qnjZFYRcGnSVNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C972QY1o3XARrXGyC3Hs34bJ98KhbrAn7AhJY4zDcGHL1eeard7UiDwvhZWD8BjsGWHwRuPA5EkheuZmjy4f1o1",
  "key1": "2KgGpdKfXcnQ2NfCQsGQxPqXKccvRZrgRLyYWawj1pKeqeiGNWYrjWkeJbRE27RTjGmeyAmDKAe1fNgCcRdmDKPf",
  "key2": "3oGMWQZTHkp2GtXRUsgiYmVKaqVENfvRcyw8rK88ikoEX5YdFav6MTZ5WFa1429LDGNt1sM7c98QzaBb4SW5G5e1",
  "key3": "5WTyDVDJ1x6oHXF8nL3k4StPt1Y673Fe6cveqJ73zBgZ6cddAnfgKEJAYDtRf7MmVq9MgfkYQAF8qTDGZ4JsugN5",
  "key4": "bH45a4i4g9yaaipqYoFFMGPWSdgxovMhTjxKizVvaNcYBfqdqC175sE3DGJAKT6DFs92Vhd2KZ11Qy3RVjgAnVL",
  "key5": "3omZChrkH1voYkHRYVQXQ1P9iFrbK3ESpa1mEhodMw7p1GGew3Hsztbt5VkmPVQtujXPsFQsbbvr1SxEhbi2e6pD",
  "key6": "53ZB6jsSsbhKkANnU4onLe7PEr5vJbxcNZgmUpSutFTdPrFu4UCpTT4H3jyhUn8n7chUUqqhZdJnweNsKiVKEf4p",
  "key7": "2ZgxDxXNBdjZeQB3WVKXxQrB9YWhFj5iXL1kERZnQyuZsTwMwLTvV7i4pGJi5wa42yYD5sY28gTBMAgvd3zHPtR5",
  "key8": "5WgNc6RW11A3F58rwcxG1PSmuyArjnY371U8s1Zp5BRvTFnKnvAo3UR5TNHgjUyjTxVWS2HgHTMod8tygFovqHqA",
  "key9": "51o3K3M5xwsTq5nYnJ2K9FLhXZ9ap1uk8eWCKDfRA3TuH3mrRyWGSHUknwstCYzY12vRMAxKnHArTYYYzLKnKmQq",
  "key10": "53memgKLicScVvPYQWUKdhhDUhi9wbnSCdGiVG1SJRxPNQsYem38J1MDMdNY3taQ9KH44Cy3MxeeqT43qGniuwog",
  "key11": "3G5fyFoqupnu8vceFkSM8HwWLSwxfrs876b9sgdVa6AmduQDiFEUNeWSMuJN7quXRQHkYoEbzNtd8zehCT52kjPv",
  "key12": "bnFJfgcq4sFdKbHtVft7JL6xTKSzkCy3nrwfZ4G7CGeNokNpDhQKtcaY6LbZP7N7osDzmgP5KhQpKM7tPCqvzSD",
  "key13": "3PkWpsrXEjSF4XP3zzCuF7SH5n8QmXXdtrqavTp7sppem6DQiTvJft9ZiUqvaMPMggk9CXmpF1aHrunbEFxp4wrE",
  "key14": "29FjMvXfcgW9j2NK3xXvzbHemQZ3WX7oU7Sug4VDZCV8F34s94Gbrr6F7aTfwQGSFfi5o5NCzUseou5fFs3xFNgJ",
  "key15": "2dNct9hNd6zfUhw71Vq8GVajV1teHAttA25C2hcJnbc4vqn8NG5HBCnq66ijPCV8NeYtSyqj9ZvtjZRJSSQsgwEZ",
  "key16": "41gxXh2N93S7XJ8ZhfyUDxwxdLcGaWGGjqjzXRxnChiU2GsAcGfvY7iZ1aHqW18ThUGM7DapCsJdvt49GRH61xwG",
  "key17": "5f9L6rjq3c5vqxyXDekxqEcedpyxPbzNkBcRaTeCi2V713AtgEV8t2YXMGyFxBdBunnokccnRZhx9ZHb4y1dyUrE",
  "key18": "3c3HmFaasBYKragoxfBGK623g2GuGfBmLNxyHNnShZCMnVB324ddPUay89V4vBnLbVKMfirfbupaGAFFaxrtCVZK",
  "key19": "5n48BdspcG4o9yBkbgRrwSpT9ABMT2huKTEJjKcSxa3LmMiVDtzytBZj7YtmXdB7S8PLZrXbHY8biAN7Bh5CRE4w",
  "key20": "3Kzbb8dRkg7KLkTeqUTFwtsg1DvqE57iXLeSVXdPJZeygwU6zLJjwkdiRP5dvSbEB48HDYy4SAy28r6DRM7Wyihk",
  "key21": "X4sZgSNyhaUsuMst9whqYzZ4EY1mWi7dPzHPLy8DJJNkgQBu3NZUMsZzin1GB5qA8vZLRgUWx8Yyuundbt3diee",
  "key22": "5D9ga49xgB9f4L6SGEjFbm9LAbqDLUskFT4PrGM7A4JvSodkuxBR8N1VHgnEAWrJ4rAPNEeCTEN1uqfoomnwa5sQ",
  "key23": "3dpQxPv4JHL7wr7Lt8g5kPC8xPEdLYVvEAPPxogGiQKTAAbaQtVFk3Bx5mkR4BVeLHNpSbDFwV5wtAh8n7Y6xmem",
  "key24": "436GekqDzaVQudevApy1qKZ8EboycyivzK24zLfnPFpf8Y6P1YmYz6qrXSkxGzqneYRBLimge3FQnRewfbjKtnG6",
  "key25": "3va8y72wivjLSZcmKNLZHZU7QtchMREQ8oUSLVjmYDXMjtBTAacYcxKZzWdV7Kao75eCmU9ok3vHxyQf5EdmDVT2",
  "key26": "3Frimcnn2BH2SSujTRqVHBsTm9t1DDT1JGyr4QokP4TvMHyyCQ2xC3ZP7Jq9abPkkmN2wPmD938YAGwkq7dpN9oN",
  "key27": "4soxkSdGenAC1SBm4zfcyyAkv7fRk73X27rfMNppv9Y4sZBYb6xD5dwxzaKFH8wodiAH3vge2KFh9TEXND5M57Jd",
  "key28": "4mxHntFkCDLuqohacSuYynjGRs6d82z3ECqdWjUrGLujbFvoS6Gkdi3srYKTDF1zQt2HvzoDbGKRxSiSMQaYChmK",
  "key29": "5WaBbKXDw6jBUvMgCJJCVDE44jBruMBTagSxNpxTZRpocv7tSamzuokwRQKExDHyRDc4HyuZcgQLNiDdjDfQjm8u",
  "key30": "5s9GAosZ71UZtTym1hAzm3WmfnCc8DvNqRo2M3VTnqJrhhekt4emXUSJWq7UZJqEhoqSLgp8poVjYPVrsLXixac7",
  "key31": "42ncdNbNEQwyrzzQ4nNX2iiMDJWqzWpLd9AXr24epyAas1sH1mhdtmfEThqYBExhKmkpsXtYnJmCEfq6AdbXLw45",
  "key32": "3zH51cPLT9pbYUbbBZudDXF9wgGHnPhJMXWDLR2eyrb49AJ6gaW1fSirpQdB8h9WEuRNjWUDYjEvpQMCL5EfJkqD",
  "key33": "5ConUqSxr4kjgeoQNk7RGgkKbZYCcZDivqJtQsyFvQ1NcZUcF7zMaKrTPJ6FakxbFbR8Y72Ho5mbLZjtka59Kbtx",
  "key34": "3jTg5QSqMppKqE46ghGyx5aP9XkQDfk26zrjNasiHZScZeP57pw5XSbeJXEYZupc4ZmfEZArELZ57hsRc8GKJvs5",
  "key35": "5d3TuizU7rAmE2HcDRg8xEeub8vxMjRriSSgfHRjaQKPY6vybLWJHRqxG5zhrPdoVn7mhCxtPG2w4YsHjMdR1FBU",
  "key36": "8mebHdwfKCrxzQpdCaMDZ6CrBsEFmwm3hJs95dB6MEmM2HWnR55gANHSBgjRczXVpJ8oJkCAv5XKZxoJM6hpgZi",
  "key37": "4QFQ8DvLrpN9LtmN239fpjsw6Cwy2xC1ZnNu5ffQjx8YbwMdNVzps72rEerm9ByVDUyU8ViQNyw6VN3ciw3BfN33",
  "key38": "32jkuy9KwsCYHJuiLV3HNpPkPd7vkvALWe7vGMXvbWFyCcPAuUiFyS5eJTv9it5wtRZ5tMM2VYXaTR4Pt2dHuebD",
  "key39": "29w9By4skpXwToxHyNcxoFLrDmhTWXdhCLJmgPE2s1xtiagn3Bnv6gMKfG9Sw7zghHNKRvgw7eET8CH66WoQnZoW",
  "key40": "21CX7w35mmv5wBSsVJ2LrchLCoMeuhhk1Y9xCEg45ep3dx7zA9JtDfHXPGmmYWgv94pyNoR4bj23rEh6ST6ihgU9",
  "key41": "4DggctNnu9jDJ8kj3jgJ9iu9vNYUB9NhMoGQ52BokosUktnBLbjXRM9rdrRhTDuMV25QS2skstpBc64ExVX2UUbK",
  "key42": "2DBx4pUGr56nHqWux9nrn57sm9wKNH7FA5keT6FLH285Uzo3rxkSdd7HXcs4cDpgikzTj7vjw33SKrD4kvAXDWCZ",
  "key43": "JWEUW6c6wwWBNrqVYDfUc8kbuxoyv8rnaRw2oyZNJWFSJS5UDrAcc6Hdfhv4esoSvGM58XhSks64doZYDwVk8WS",
  "key44": "2WRDu3nRo5RvqRnpyqsePiNESNjVLKba2TETrYSKUdMEpEvQxMg8LPQCKWYR823FgKHZqpPewHFmRF8UrpfKGQve",
  "key45": "4bKmRWWpXrVM9aERh821kvvqYd2KZiYQWZ1QahcZj5kBQ2hTYNZxY9nXCQyEwPD8PQJscH4oiyzLWhYHEjUcBNst",
  "key46": "3zGSS1NtiVNhZ78kM534NLmEWz7As47kFvYoUipAJYGb5z9s4fxj5ahpxHhNuMWp2kwiVdU7ry37ewncswNqQR6Z",
  "key47": "3zSqJoQRLzQ1ctuBJANWCkuaR4C4QYgWGep1PdeNLNQJMzzSoVSZapm3JBdzxF5837QxhHbTktqXTMUZoTVot96d",
  "key48": "2chJDYmVfDySMBwp4BQNnDPHEyUdQnPzLMzYnKfU7QVxw5jENph9KLJsCTKxR6s5ArUxUqHDyH1dPMD58S12siqz",
  "key49": "38czqzFfBKPtPGcEHgTgMNuE5cS7JdyA6SR6M7dQRpic2ayHJXjmg3ybF88N6duvVLXjKtJNsguJJQTadmZfRG1V"
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
