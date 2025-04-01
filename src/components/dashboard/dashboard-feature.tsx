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
    "56sj2k7a1y3Tm88hZJdnbNDK5ch7nqUBTmEu7kXCo22gmufzPHHnsfSyvHdWZzvPruBgRNr2bzMzpfJs3RHKpqJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPHDT89tkh8e4wKEjx6CJgpi5bgJeVcJVBNKXuxoJNa6K5NNLZVo3ifwERbA6wtygXc6fX2baFFXsZnKRJLZwnx",
  "key1": "n4XrXqTYPuSob2rBpxCQx6p5G3qfYQZxMNir4hymek66hHBmnABWudxbLJSQ3jGNmBrW7khuq8ByCc261yZm9Sn",
  "key2": "37SvF6dYyTRExB2BhN7gSk1RexEteG8oERs37bKfmMmFkydMoHDmWtJc7dhKErrFMnVDZcBKHe43QRfPEGY3pM7f",
  "key3": "2UEm5mUy54bKVPr7PAXWeK3YRT29NBPX1HCPqgWE1JhApvVTjxGZmV15wJTUkNj3uTp9fPmo5y1WgEPkF3UpEf5g",
  "key4": "5b4DMtA7iJD4o4iL3pW43tQnxYiuGCHA63mcqFJWZ5sbE51kJvxEHe1UFE7UjYxtF3j1NHhk6JPSJc9w8wtu9Dm1",
  "key5": "vXyJbX16PFmoR1LN2MfxkdeCtnpuJbSTz14btVKNhUHGJscSoGTANkryLGjPdzMLruRkvRz3RkGBgmtNo9dY25o",
  "key6": "29qSxxqW3Zn2EugHH8XNmR8UsthF8jucFdj9uVMJQGeqJReKkqAG7MkaE3CSooRhYya21DuCFX1JfGtoHRtM2tkw",
  "key7": "5zQXmfn2Zm7HLnbQZdpo2oPGwZT743bPuienWDoh81R1YFK3wk2yfZoBHUkSEQrnQJYFnWxTz8xbGXuR1wbPCjYQ",
  "key8": "4bku5qnVJy1DQv3ny9hkthAkMoXZ5iwDC9sp6G57VYYBMYG1YqXBZy3DcnD9kxQPLDTwbxM2CrqtAnFtyLy8r6Pa",
  "key9": "45U6oE3d4chDYS8v3Qk9tbyff5mY7E62xYGSSkKUQA6dbvpx2ATAkVx6H2sFKpgD2KVfei2nHS8vpCcotkVu3Rkx",
  "key10": "3yWYA5dqsvibz3LRUNpcsuhHe6CArNBMNC1qHya44ugr6CG4ydMAskbZsHqve64QUNk5js3JwQSJYbNpyuSacfYx",
  "key11": "54s1DFBKiQ2srknJkB2wumuWF6wtyzGcWwdMzn5ZiJtP2NgQuWraAQbdpnfAJh13PMtZS3DazZwbwfKoR1kDWo7R",
  "key12": "67AH1Hj37JUwhotBYvaA1468gANqxfEbWYopCZNbNSNKpTuLpCgi6H4AqAnAxFQbPTgdFPMg3ZDHmq9qxxkDsJrG",
  "key13": "5u7Qp49zYhXMb6KyLA4MMfMxowg1mhafYZXCGRmYadJUp22HtF6B5KbWG7YrNzbB7ind99vhb25sWndcGA2xLeqb",
  "key14": "5tAwjVnmTM1GfJmKe3KijzPFzgjz6aLbVYfsi4yAsSQZggxYaGLquriUTAU3i9Y1u81ApHCU2JE6EZbhW8VMr2Db",
  "key15": "5WC9RW99fCMdatqwHhCjZni9qqfzPwYroY1zh4GMX9FgV2Qbd1dqiHtfWDdQopd5jtnCEZViTZVxWqiTF8sTtYMB",
  "key16": "5ii8fwMDBBvMtkuzz27iE4aqWaDscR2WDRjRukHu6noRTLQW1fDc9T1NXZNgf1gAH1L6sSEZ3erHh6txeM6W9Q47",
  "key17": "2pwV4TaE3yYbNgpjFhkmPb3d8RGfp7HqVgcy8j7sKHkr1BL2zXXPVUTBgjRkZund4Sr5LEXSG63hBTC1qBzPpJNW",
  "key18": "661Nz66errmGB8iqDAKr2vJs98WsVkNdADcboMMFm4P2A7pnvAViRHQ2shbJvqGB7X9ii8qJhvvngkayr2wEZ5Ca",
  "key19": "3K7qBCKBR657hiUjkuJHBvjuCqEwj28yKxSTVqQFTf5SkHwg89ERiihyuSWixuqtbrxfXUvLxnumV6mXKjH6j9zu",
  "key20": "qS15XkjgNTXDRRiiqCDW3S9MXuxCCnL7T6FchavQvLcWFRyceZ7j4J8vGgikXZgDR4qJrpdb8vsP7ewcjrS7qS1",
  "key21": "5coC8DGs7jjRDkaHEUEEJ9xzxTkTY4BQQMddMnrNVBXoWiPNVER352WPEhQ4vLcZUMcXNF6wYjQ3Urjq2P5w1R24",
  "key22": "ARjqxuN5SUWAxMWkqM7w82jrRtuxxB5idxAQ75C7tGv5Pqui4iWNkfaYdUDge1UhjpMwGNFMnQgg9hHVWFNe2vT",
  "key23": "4P3zrXqLqaejHNk5vJyoAdTNmyMZEPwZpiK9LQVGupFB3ArXgqW1Moq27XPqQFoZ72jH3Xdn2YVdy4Yr6ryqtH2R",
  "key24": "3UFhvWB1QS5iVAsVXrYKVx3mGYagbP4FteGKUr6K39gpEv5tLNnSJEcz3Jrz3nxg4k3oCVZtznvaWwd7gbxu53KP",
  "key25": "4Up6B3zB3Zha9ZzkWV7USk1dQJDZMP1HaU299U4DT8x9qLvYbDuuMCpT9ceXCDznQedrUeauSGeKquvuoaru7txm",
  "key26": "5xK538w7Quzeuq4QZnpqXMguBn961nJYWNndosgBDV6gGpT3LQJotYMC9yv4Lc9vDP9fea1Ns5yS3T3JNKu3jSAV",
  "key27": "2KX4TozstawKv4F5VVBAt9KXcZGyGM3MEd3Vbcv8jPPpyRCvZYvyr56yDY9cT8ELHN6DHWBdRKaga4xQ4QeYKpdM",
  "key28": "2fGiZigNcWh8hr92x557xV4m6XCaYPJMW7LpefLiVvmbd8NwH6t2VcidepieGMj3pBSawCeBQBV41HBSx23NxyWS",
  "key29": "owaiBkTkuNBEq59JpaSB72pitg6grGdW3VxmypvX7K76nUK9ZRcQhtcWscRKUhvZs6ifcevPWTHXCMaLQcVzWxz",
  "key30": "44FQaDaGRrtHTorUGW4Drtc9HQM8qAfV1ApBixo9mV5m9uqNxp3zXLzxtxMsbCi6r3NUx8KBGAvtEzpjcV9sZtZL",
  "key31": "61VpbJqi4fDaQKf184uneavnhLcVs3RrZ9zWY6xJ9L9vR1Pdmo3VPegEdCd86voBDzcEfiDveDM7yy61futuGvDE",
  "key32": "48Ty4b6LBDiW5gbizFsqw13dv7XcqjFxp1udob9mrndGmSXat6TCaAtHs3kqMC42a1pWge7FeZAuNeHKwUJiScaj",
  "key33": "5JuReNpvzb2Trbeotr5E5wjahbG8LcxHHLdkVyiVfTdhRj6yZwmpweCgMzbX8h4foxNHxvvAjDCaLbHkjqdVizcs",
  "key34": "d1bUEWTagAyvXrd3o4mpsBTNaFqfDstZA1NMNk5dmC5Jw2Ta1KbVMUSJFgPuUur2qcYFceb7WEi58tWiDtQxn2r",
  "key35": "2EfffFVSVRto16VHgipWomvnR3CYQWdbGTJJKsTdVz93gCEDt2A3DfLADxvhFg5GzhYRqyqk91WA69R5NYQ8KZcH",
  "key36": "RmQr1RbXQKyfUmRRN7iCkrMpvkstuW3HnLKQyTCefoHh7SoBJBciTM5J48WSQNT3ADhSHX2VnxBMx7bSFcch9V5",
  "key37": "UzznJnCGpBpNU6cMi4xFs2ne3bGRV6Va8FduHG8VhNvukkSrTiGZimhF2ernjg83fGBP5So7AAunvkrandnJqAW",
  "key38": "4UbmS7CYQe4r5HYcdqwBq6PydFRgBJajyoWBEMU7DT3E9Xatj51JjerN289CM26NiiKXhs8feCYzf2F8ohsu1puQ",
  "key39": "4BpeTguB8e6GTYv6NWykU1RwPvkEwU5YwY82twhepJiDcCT7dgDQ5tXhfSZfmb3GAvmATV1f6Hv1G3uNQG1mkUM3",
  "key40": "GAgeENMDThNP2apRjmrtRP17Xaq8vo1iFAux58ctEMRGxpEd7NHsJcmPDgxod1H4XCSYjZVXpWjBBwgQ1vq585b",
  "key41": "26kAbu8HLiCbLnPCVqWxfdgsS3gdc537grt73dLmNDFhEKGQCizpDnKKT57Xnu2UXq2y33GbtdMJq92WJJzGwaCy"
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
