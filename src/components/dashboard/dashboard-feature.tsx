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
    "j8YfswyPHdk4FPfLLNKTs8kXAGDa5RfahEWvP9CQScea6V9bxZkV6XWWP3QUthmqbPUXVAApeswVBde88e3YToH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xok7nN1Pv9FFzTSzabhBi593hwXRAoh3AHyowxeqGVxNWNtrV8viWon3Lt1MC6R67RDWwqdQ5Kb6q26GwwZsGTr",
  "key1": "5CT6Q1WzWwZCLstghkTc3SHKfL4n3bLAopWcoLWhLVVGE3PpBuuCXs5dWyhP9FtRah98qF8NmGzCUNVb8aFfMFnA",
  "key2": "32V3bzTZBjD8vaGdPVugXigGDaVgUR8qaUknZ9FwCf4dvaWgdygqobHvrUwJ6CbJWUtmuYBnPmrmpHBb1H8fPDwE",
  "key3": "2jyMhmBLaxNGTLMSReV9Bh8JjHFL1WZNGe2cvywgzRNsQV1A4o4PbkkyYbSyz5Le1dP3NYDnRAbFoEqk5tMBesAF",
  "key4": "DFoUowRK81umGMveXPkMm9aGk4cHAXRoeGWGGdUKZ3X9DFxopTC2KRQHSQS3ToJEZrmU7n4c1XtjLg2SojGUbte",
  "key5": "4535t6qe5Yt4G2JDtheLU5VLxj5MZSHRzWwonaHd97zgV9mxzF9uydMeLSZ3N5Dpp9GS37k8CK1ehyLgSPSBRhvV",
  "key6": "4mqmwSUVP9i8uVBAX8tzPugt9S7vnkYrQgiTEqbipqvF8vBA3DDEeFmZsE4vLs4CvUkgLB7zeAiFzJF1KuArEPKH",
  "key7": "tjRXgYQiMzqeeuhiXxC27QjR7vjFvTRVhCnGgJGcx2kVi4jgNeM38pJ6KZ21xS1wD85pd6LhBNsnQe88RCYh8Lz",
  "key8": "5Fmu4XDkXP8zVxgT2JbQECYyi7s8PREjV7nrV8NsVwLszcC7pdByVbn1QNnaWq7EGgYzhrXjVJsioxmBwhY7zmJz",
  "key9": "65PnF4M4krESq5KoGig3jj7qVhTNbwvCf81rujHbKjJMpFdWGuHp9qqe78dtNgLeTNooufyTNcrB3bcPVaBCswRU",
  "key10": "3HfprE17NLQLKHJZXkSYHVoUqEiy4YvaQmBAvKhYBamc2JSQfHEDWDEG75e3hXGyQwbJZb1gKPbkXx7KJbqA4ixP",
  "key11": "4dfn2fJCaiheriivPRR9KrxmGxEcq3gQ7WXHka23Cj9ELShY9wqfF9LA1uaARi159hJTrAnNFMYkHzAEwxWCb5JP",
  "key12": "3t7HJzz3vGjSqgoPCpAy2vWFXjuot3r5xJZ2UKqCETnvBAGZ2FwduWENfbYsMPNzjq1F7CNK7frXLYMpmAUqtXyu",
  "key13": "2vGhxvaVMfQDqaJAdpWWhAC4nESS9vp5RncoWQijujSJedrQ2xbsCusM9ECz1MHtijWJ77Q1kDhFWB5TZDrwohVs",
  "key14": "5EQQYoT5fU9vNwttssjoZrqiWhdQqxrV6a3C7EciWBymDbqaUSqutUcN7G4uLE6ebviTQSnKSDvjLRLJzYfHVmRp",
  "key15": "3EQ8tdRR3FeDkXvm4u1pbYfEtbLSuYfFWi9W4f5Q2yJ7NV9NDnmEye8PEHcYj23uuMb5X8u2RTX6NAoWHUyUW2pY",
  "key16": "XYxBCkv6VwmqNFasJKnkZ6L1pDqqP5fWU4ERuoDjsuC2195JXojejq5HBtuMCnL2T3MhN1n1GNTVZqFfnprfJc2",
  "key17": "4YtpmemXJChBZygTySLwYbDCwqb7QyJuUtb7fDSHn3Pyekf4SnJisZEh4QuevW4p26TuVmnU7ENm1RWuJjCUkZoF",
  "key18": "3WboUsG47GvseAiXCXS1tij32gHyheVThSAntuogwb96hpjx8kaguz74JbdrSTdMNySCfsDT2ZqfwXHduAhcTMp3",
  "key19": "64UT6auW9jtJzL9YcevZ5e1c2FuLq33mXNuyEQJqJqxurvkFRNYgUcmPByKRY5SEaLvc5ZzPZV9yVDJHv964uewH",
  "key20": "YnsbftTan4Z9JAaRUBPaeBLJnPe5cYxRhCh8N7prN5EBYGVnLXR1XQ8D6UbRwVPj5G8buGtu4Dgy2iZsncPkojy",
  "key21": "4XhpZux7GymQWpMRxkCi2jz93oseBRfMC9chMD5So97SroLj82HpmVYNB5kvXeF5RZPxMCUyKf2ui5H1QBb3ZGxt",
  "key22": "ntuDF5jTwSf4fFJ5MbSa7Y9WUAsrQbUnPyvuDqxxP8AoXPpku3EKDQ4EPousq2qJv8kTwJddM9V8wg5g9ktoaF8",
  "key23": "3gHvvdCbNS99gG6GuNqLm5caPwy6Atz1eARf9se3CmbkVWta6d4PJvA86nu1tVN2H7yKCV6TqLNEmPETKCK8AFDv",
  "key24": "4JXqrTkC3GvjHDhSJntwSwVLMBX1woXdjH1DS9meDTgj4LDf4M4QUMEyiqGZvggMMPrHQqjVWkcbUHCMMaGwjFwP",
  "key25": "5o1N12ekKcrgUzT63xhBPqgiBjchMwTxTPDpASa5np6jUiceg4HJYFpWvrbrvAr1ZCwSvWV8NwJPmeZoN6mZzppx",
  "key26": "2NVddMpgHq2wEa6BBFQhApr9t9oKELbHC26ApAz7MSzcKZaTWu3rW9stznZugvmd4UcKfoNJoCPUmroGqa1d3Vxk",
  "key27": "53KDiKQS7JviW1xosHwz7iLyZCeMEmAE2V5JyTg2gKwnxGLQrhuVMAEehRGTNxRhiAKq2TawZuvtcV2spiAirSPt",
  "key28": "497mK4KsHtApnduvukcpLayyT98Z4g8KiHcAAu66JvFWMVZaxjhdsjDA5Ddbaz14PVTAfCWy1MhXVGDDjWnrbwNa",
  "key29": "3qmzhXPVG6xmaJm3XVK6km11WVFqjifEzWqYvb9C8GzYVz51tr572rKam4oUXQg4maz1F2ipiT39UJk1aks4G4Bm",
  "key30": "23s16FcmcAfXthopE8RsqX8jA1PCPvrSXNBUQ83j4MuNMnC9iYiYDcj11rRPyd5NWigQ919d5NJQkcQVxaHPKvVf",
  "key31": "nSSL8HRWst6r4UKuiPoWFsn71BNq1S62Zie6wBaLrTdPD8frmDTjvRFHDA9gTnMq6W69urq8v9EUws7PnFtZCvM",
  "key32": "3YkgG7MNgBT9iCBuEX7MQRwsEUUuDAqTdvJmVpuaPjmfz8w5SKgKgmMa9ewAgqKzALDqqSxpVMXDKCL7MBzqK5J5",
  "key33": "5uaNAWLeAvcK8Uy73dsgYJgFUVSiqd1FhLRmRj2p5WRnEzydcP7Pu5g5LwuiqD2X5prHgbwhUgoNgzpv2iaU9Nik",
  "key34": "VsS9YcEUvYGASCqXJjAuiUgHjTaYLp3hQR7NdYgeC1sEGCp3qKWNpw8mrFqkxnRGJf5iHSbvVroYafsrzL6DNbA",
  "key35": "5T1DU5awtGchMyhvefb23sbHKWeVgFYBaKaoBQHqVGnXzZQ3AKt3i4Wv6P5TcyWCY3T97jS7FNtp89TvrPs68JnH",
  "key36": "39fUV3tJEw7qkQLdtttc6ZTaArk2jbfzxDh9G7Nzhk3SLTeexp2u4PoMdfhhFz739UsNxYxgvtZZRtgYGMrEx27i",
  "key37": "4w7U2vTW3mMDLdkf4xZ8fankv13SyegdmnSDmZvUSA8SSQJJ1BAU7cEpAG9AkUZHuoNinj9hsFa5icoyJ9FVbyj7",
  "key38": "2n4pqVgVPmzEMUq6fnFCQdmUMQmPNx8Lhm9QtdzeLLei1wBBMoCFDVDUve8ohfNZoBmJ5ZPPwEEXty2t5eRynupQ",
  "key39": "56DRRkDAXa6YzzUE9siDWcqBHp6VB8zpWwRL1M9sXV2YGGDnBFAFs3uZYuGsduZBzViDNErmWCjzUaghGrFhG6zE",
  "key40": "5QriN9hT5KwcmWQsKAYTXmZUMhfV5a78Kc8WUCi7grHwrT5b9aqji5C9QK8XChR54nXLxH86zVajGCtXB5ve1vZA",
  "key41": "43Bhk9n5nd7SE4TtkvFosQurrJy1Uh594UVF5NNiY8tqFtSoT25iCD1xFigkXLphYKxCX8ggMi7A1ccAhPgqVy7y"
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
