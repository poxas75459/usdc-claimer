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
    "5eEpJmLgS2mxPzuBP6seT2Cb2usWJyqmtEArU8SibJJFAmVkNaKx7sdwvqjSWCCM5V3fvnUY49XKnKvFp4ko2keS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSwznVS4AamDsHk3MSwdhYnWNjYCbA6AkCjj9Hk9urf3f9Zu995Pobwoavm1VjSi2To6ERGEiqoMjUCJxCtMkD3",
  "key1": "2d3mim3MH8jWYg9pcScyNcGMPhSmk7JRL1ucBWc631M75cewHFdNy9DQ2Jpwp35PZQQVFPxnB8swo91FQGgjMKgU",
  "key2": "3jZTpwGfWDZwRJoufh3QvMvZGt4NHo1PcWGa44q5SfeYTgFJoXmjEUjpDmcewRexpYjeW7YLtwxdtBnZCoN92sft",
  "key3": "3PD5iBEV38wEqtuvQE2tVmB4iAeoodkm31QPi1Hq2yqUWmWCDpjWR2X6cX7VgKerYw257ZG6pDzqT5oPoYbDefNW",
  "key4": "4Qa5DszTDgGTT8DDasaztAizAbBMuznPBGyhmrbBX2MC8XqhgUnT5McQ3w1C31UHziRiqQLbazsbuD9dCDcmBiuB",
  "key5": "2Qtxf7vRMPQ4p2bTXUkK7xhBLFJaGhbHsTTy6PvpikPxEX8uXcbeJiWoSJeEYk2ec4jtzum8xdicg2YwKGJWEgtj",
  "key6": "2np8EfyZJ2fHWdjECha7aRspHZY15i1uoQGranJZKLUtEDQQAL8SRjHjR92SwG55pozVRdfPyRFPGk4qSNhunAeV",
  "key7": "CiTmUHVpnqZmGC4jLpys8J1Dcej6pVHp9VuFgA3rX7B6JUzD53jc2P2vtQJGyZjbEJD2BdaTB4X1ii4xU2Wmtxj",
  "key8": "4fNrqUZ5ebXLBUkiYXjG5niBK9DYEBxSjNKVBYWpqjKeVjCxGvMqzDD1C79SRoTERUggfdcAHAQvAszvJrHfoP7X",
  "key9": "4pi2PJJcFrhC7Bchxa3VmWAibYwyuayKjZM71zbBqtALojsPtxNrVgtF864VK25oSwymhenyN6GDKapgfzv8Mo1A",
  "key10": "29V3nFz53fvrNGUZY8zRR8NQZ6XYVWvpi22GbzXhaxqX1JFTe76ytvBq3SFCEuDAFXS1Q6Rwkh4PtsMYhdSEaNNA",
  "key11": "2UnBQeitjPEQXK29ifb6xipbuovDxcrb7wqAFo6zdb8pWG1kHx7vhAPPjspWJj4LdxKpbSg7wi8Myxhmrn7oSbw5",
  "key12": "5orqL5fao1Zxyj4n26hyj5dECFQRbEQrxbBcS3HGxnG5w8Aqj6xRZhvWxNNBEBPSeFnVPVesYaoPoA1HAocBipNG",
  "key13": "5jzLoqfBxDYYRXTHguJ19GEWZV4yTZTE3o9D1NMsy6DFyVozDFLaG2sXHDKiwpoXziQXn3c6dnb7CuFNZaVVhHFU",
  "key14": "4BXiEsju2yArRg89sBi4yTt9VH2uW11JU8zKktkEtWPS31ii5fxc63skFGZf1gpwkmYexZDijsx7NTTUACoLAGZ5",
  "key15": "3GCRzdofmFJBBg23dAL3ym3TY1eZoZByw5y13e6Pc6khE1Qa5oM4N9NhzHMgThy8XbCL3xArzaWJotmLUUaUq8LM",
  "key16": "3vncp7rSsMQjxcLBRSd15wBm4tbQVSPes88PKas5bRYejbcMmShWvL4qdRGXFog6QgWnVEojhj1EAKLckRkMQTJm",
  "key17": "2Cb3PCCd7rTtiZG7yakn23Xd4LPvDiRDnyiWYxykzT4aRLfCJqRNfjvVi5oTGAPEpoXptwh3VoBVES4LWeVWKNDo",
  "key18": "v9WYw9RCFifbt3d91YvUa4b1JAnNN6DZZvUoBCFRoFyjGhZ31gfaPwZ3SdET2bez1MmYRSGDPbuZZDkHUrFrxbx",
  "key19": "4CV38EKubDTQFRxXS91fMtj8PS7Yoa4vLPNJ7r2he2nzjDeUk5DPgZ3b1f8prVqR4H3hS9FGtFUhrJ1QgpgW2NXA",
  "key20": "4AH7uWB4LDzoMFwNZdWzcSTQ7tc5tweU8WQbert2ooNccASE2JQQ2XxLqwaSMh7PwkwPT8Ad2eFD7YiukgqfSxS9",
  "key21": "4iWJE5s3dUQPgHExVZ7Z9BXyg3aJjNoo37a6ghD9rXiWvM2mUGSMyojpwa2tPomACRCZqruvKN766k2L4fBSpfym",
  "key22": "4uaC7EYJiyHaaYZT17dgz4LPhRe5ij3jb9irUBfXPqxKm2ezSfV3UicoPWXRKpDMT97e6RvWnGzSwGmFQe92EKAf",
  "key23": "4cGJSUh8TA36WmktRG5YiSbKNend1Ru4fKhCuJyU5sMaHeUGCKc8fp5eHK6yJZdbpVLupVbCkPBd3rsnjKafH9Qv",
  "key24": "4WFc72cZyQgWbjuuZRPfo1iFrsHdg6rF9tuCEBdZnwZ1XnDEekUNyP1sGUsVCZJdjWF7QKYZDaAyEcEVvp8nazAn",
  "key25": "2YzSXPrdVf6U2gvq731WqupUHnH2VYzf43rythDdtvdyjVxApUagWXxHhhL3dtSgdbAnuPLFZKE6XpdggLtZbzQp",
  "key26": "3x5ZgXaa9aunct1io2WYTQ4d8LcNLMvhgP2MZURD2jyxrjCmRom7VEDm6s5GkvcSPNvkZyCAHyXF6biAVKbAYMM9",
  "key27": "cLTLfcAuB3cjTsbgvV2JDDS9eFUk2dv3gT2zUPB1WDukwt7gFcF5yydMvwBvBZ6Ut3Ef9w3i2dUfTLZsBzJvAfA"
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
