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
    "2E4TXLdupp74NP34X4P2GSpJ3xrEhtg3CHAxPT5w9skF8rehr5zjP9VriLMZoV41LNdoefTzPFsMdwPaHH9pgvss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298jLMWY1pa1cSvXHn3ejTNawNuhr7EdBLEkdmnb1vUAJRUVKqzRx52M2h8SbDBwVcEpSaXtmYRHaNfn9qPAwdrn",
  "key1": "3YxjDKs2V3A5xj8kY9SNpKQoXM4TtVmnh2Az6yy7A4efCh1JLNQbwUUUeSsU65mnY7bUFDYQs4zLuTY7DWjfY2HU",
  "key2": "2cU87yY7cUvzYruDyRhCL1kzY9CX5bfgtdDgXkB83ZsXjCsZVZgjkza7zZzzv5fWTNfMt1RscGXuGcZDge4GG4aZ",
  "key3": "5qTjj2X3aD6tV4GDaEogyq6SMScVAG3ZPNJixmsKQaPUfq5TATM8vidTGi4hBrrjQzcZVvNJzkCc27VHArdnWBQj",
  "key4": "5Bm4PAm6uXP9ja2zXCmHzWahqAtU8gn7hrU2VCGYKcQEUQ5m18bQFuqLkow52trNYAdgvDFmNABAtY5f8bZjaPf5",
  "key5": "3dxi7szCYskoSLKtwZi17BcrakSBU6X9cau65BdyQYGMYUubkQ1Pnz8h2Q7GLtKeYqwKupXbD9a6acaiGdSStVCu",
  "key6": "uv75C2HidjaQVZYismrTD9f5KHtWhvYnvZS4BFVbFC2LGcvrvpggGtgFSDZTxEJQnN5rFCbqjrRsNHwJtcUDJnk",
  "key7": "3R1J3oq1oEGs2X3qovngaWeJJYMefW64Fco2rXNBBb2ozSK63g6aTanpgNFnPcaSoKPVvnYnm1wLck3V34656fij",
  "key8": "5nTvcPLYnHgxSapy1BYrf6c7EGqDH8YYk4srJfC5MMVFdEhfdW6jsbRfgBdg3VfPeg6y12BHgsZBaJgcabG8JQgQ",
  "key9": "3VfS9yhtcrmAV13Lg5TUfHVrLnmAmEKWurpATNsAPyTiksKyMVKE8wRqyNFWCLsKpgUg4m8c2BuYMuxrzqAztYSx",
  "key10": "2FuPkq5T6jD7K9tRy921v4aJrqycibmVCfXeosTXtbgMyzw6V6bYaMEt7H5HwmLhaAG4XxDrhmPGB5nSqRNFxzKf",
  "key11": "5MZvsQFPLGQZUi8w3n1rqEXLVELNLvQipypGiZTCBk6HY26mFKgkndQtdnNYg3tHUoxeSLQx2X6ynpu6enjHhwyD",
  "key12": "5MYyS7y3SEKf4n9CTo3c7fxh49Ve5bdpnAsgYnmr18pw66spuDPjy5CHUkprjST4BYWPvhgv1k385qDE1MDjEWBk",
  "key13": "4YGR5Gndd3TgDHs6jwWAEXNY5roDEbEMN8mQSd8jFKi3mJkGzA6T7jYjD9g3yHzxXqXorrF5mWkbqgRBJTPWwarX",
  "key14": "5Ta9QTfWFHHzYHayTTJjWwabMUZpxwbBYLTVwits7aKL2GvC5NCDLFNgkuVPSQU82vPtMXbgQ2Sj59MvercuFqiP",
  "key15": "3GWTpmQHeuqpkU2T9CcAx4VA3D6waLWshVH6mB3qAZea434ztPPygt3x71TsWFUnjoE9h4gBpnLHn3vWuzYbzgCK",
  "key16": "3DooWF38fRL6fLx7DZxubcRhFDcDmyzoeCtVFnP9hvR2Nfafm74TC97xhxVpmTLtuXwxP4St7ysMSTGwNR4MtSa9",
  "key17": "5eTnARJ3wC5afTPpBNMxZLWrhNbji3EK5TaehpFwWzjbmCznnPiG6qnEUkYBUgFcV2JoiGXdJc9nehBjspRePZdr",
  "key18": "33PyBWnYJcFAvdCToVMQKGafrmdM2rTRkP4KbZMrzkVPaLUxiFhikqiucTjekZrBuSmTZb3X21C3VBiqqgdAzVpH",
  "key19": "4uxxpPuGg1sLJmT6aZs1a6iCgdNW23mU7qR3bthyjmc6jkt7ACJpJK2EsvPC2s179d3PiD4aPfw2jE76vMz23iqz",
  "key20": "4fLagUrzQ5WUuCP7rHbrJ9g6jcpkizxs651mmpn7htMBBxrPFUpBX3NSTH5ptbWxHGPXWZdHh2QDjMdwCLj9NBRo",
  "key21": "68jDy44f2QegMKzXGfPMTFjg6Hm89pqnkF7evYGaoT6Qmd4JaSxoENCPemBzQXEAS7r4gxrkwmo16yVezKwabFM",
  "key22": "58N2pxXv3w2T45Pje1GFHXVJdzyuCVBdjAefNxrdsK2MtfyPTp3YuMderifdRHyBA2BYqFECtoqQzXxt2TtBbq7v",
  "key23": "v1Rxeq9ixNNn7vbfD7sqevJGDj2dEnj4eHC7wgj8yNWq5iiRVpFxijjtHKMywQxhfs3pz1E36SaqZMd2oDBrNHS",
  "key24": "2TZzxBRFW5qBFrQCuftdTmLfPVrxu1mW9t6TwFdrFLPjaeGM9gBwGodJ17LYUHCV89z8Hrbu9wzsy8BYtstUonaG",
  "key25": "2WF9ZUAh88n6uMc2zMj4emWoxyh9DsqKKv7CbcoBvwYy5Mvcwgz26qr6FspvmCbJWZzJYQSNK2WWK7S1iQgMPDKd",
  "key26": "5PzEjt66vXCVmKeAmy1fwKGsSmpUK4mYqj2NPJAZZxnrM85YNUCENqPjMko4iHfiUoqZfbzweCjkAfEUCBWW9VpA",
  "key27": "4H1QVNnJQpxzEHqRN5i93g1E6iMC18jTaRsy6HFThQSM8Q3NsjiKumExqDbJbVKk9BP1FpXWGa5YmUbZMub6nAAX",
  "key28": "2oriZHhGrRAhhPpwdBEu8vRVP7uR4V8LE88XYdmM1sNHuRf4nvJ74Tc1TCqd4euWuXDBp8EXPxp3o71kwZqFTxHi",
  "key29": "3C4vD8haicnktd62HofD8WGTcUaY8sYBkK3zQGbu86jT4e21kCyShVHpXPQXuqSg1HDUTLaQz7of31w2jb2BpgwP",
  "key30": "gf5Lmw52RbTi9P6L7Qfi2wNR8G9keDdafHGGMZrJcWzR6635WjC2r7bzSHywHsFM655WtCTHMTRC2XNKMiqvAe4",
  "key31": "3euAWCBof57BNxDe5AAKwJgUQ59AwHSmkUKg6ZyAJ1Ts4vrxMPRVPaUwndTUqVkCNAq4hd7orb9XGNfwFnq3mRXa",
  "key32": "4KsL6sN7awZYCLPGr6NKkVqQVFadQ6RReTh3BCRyMundRZXsdLGt8VG9jQAdNfMmvtgEEDUbovaWv3QygG3pqsVd",
  "key33": "WKycvvAFeN98N2NEMgRekHQqc94S9mQQiV1Q4Caausz7HaP19EfiCr4CUg3Y6Hm7Kdm39jdWawa6kWBxmMRENeN"
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
