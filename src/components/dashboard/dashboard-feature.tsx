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
    "KMgYv6fuBibyN5LHfDp6zNHKkwHHdFh6HoKxYusVjnJJtJWMXmDHxPnTsZ4HhAto51AkRR4VRJXrr2Hi2bjoVvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LkazXwAv4PanNbXD87SU6nXUiDxuUU1Xsxg34mgL9Uez2n6ZPhfPd8fG16JgokUoKnHnUhoeRVGuzXFxe9kC6YX",
  "key1": "3n5GU8jEkdJcF8V7z5Cze8J4nSEvzzjt1G7C4HqPX7fUwURyJvfAx9KVZb7Au16CLbo74zs6BaxyXhN9v8v41tdx",
  "key2": "25usiA7GanGei1yqim8YCDDVgRYqBJNpmfyMJMQmEtcz4h3n1rJ1XvTHoksx8to9dcUf6ZSTTHbz7uX59KERdWs1",
  "key3": "5U4ixBVWgUh4B9BVwR2XaQAdhPmEtTszN9mpSRxGpmhPteQovEVmUipzXCN7tcZHXV1VyC9R2MmwAn1iE6G1F5Vu",
  "key4": "64bHmEhsCk559b8tzzW8fVsaN5EEDWGfLkwqfaiQTd7t3RkSTiiSTkWQuDNsSxJg2muFSs8EDFrEWX83RumwhQt6",
  "key5": "PcpNi3uGbKbN1ZGfqkvT675DKVfr9Zuyw1NgUQRXfuMbJTC2p6E1bihjye76bDtb41T4t8o5FJrspyEkTbWeZB8",
  "key6": "5QauZXPFqK7NLvudTGbPKg6PdVfWQ9mYW92qukGRFgfL3odPCrGjnZifgBHqqzKkSAqWBd3cRdowHKhfGtfF26ZH",
  "key7": "4LmAokEjJhLvprDMBxc3WnZ4wg8VovYFDAve5ExE4NLuVPCMwRvUkiXBcQhbyrAiG9cwicAU3HtPVra7aidywwM3",
  "key8": "4jBUdSbAYd1RNtzfKPJv26J1F3iqv2qZjf2nkKFgSA1sPJRuYnsMnvEk5zKE4XXz9npMZun1JYi7QUdciH12YGDY",
  "key9": "4g71bBgdo5w14z5taRtuRjDsxYpsFxaHaVv4gCwmB46AoUj8vz9jYqgHYGoGY929SAseY7MUwDs4JT2bfmWevA38",
  "key10": "5jo6rdwdfL1bpcFdLxyfLpyiBaoUq28JGFsf3oN9neDzEaZfmmvtPaADVorxfoVPG8c6MRRFibaDLREcd51pmtou",
  "key11": "53v7pyynHkt8usu77kazxrogZkxE7omCejzuxgRjfnxxzWC6G7BJ54R1pgrov9nMYBRmfztpCWPtqR2Lhhw7673r",
  "key12": "32Rh5x4x5kRC1G2kDJh9sdCbkFxLZtV89jBmiXGm5F4n7u3VneuvG97F9n3SYnyhSgdQaVkDa7Hz1ZQXUy7fsqBK",
  "key13": "5w2Tu735WqiA8zCTGfiucnfg1f9hKVuNZbEvU7LnpyUM4emVRG8y1CE1SaPDAQRBMLLgtoTnnux7PXJmyDAcLSUM",
  "key14": "2J23pmWaaz7zHAEPYt1j8aG1Gs5M5D2mjwvtsmjzVEFtYC6ezg3TcTyrV3LVDij6TJLcfxxXKpzRDJgVbXr2dFrh",
  "key15": "4RATuzMGVwjq5cmWBYvUry5YVv7Cx8FcAiBRzHyHfRiT1TB9B7gKkCZciRx3UXGfVoLZAbyqhY9QtwzktNxZ69Np",
  "key16": "5jeaLJbiivnDGNjgPLEwMSj2Eu92DTKh4VbreBG9MFM91RX5iMMwa4e6EKSWEPKvFsd62P1qeNeQkaYLn3NrVKPY",
  "key17": "38JYhFXoNh5KxTTwSXKeB4NYEu9ZFAPE4VTvsdQV2iedKyf3E368oLiSujVv9pSqAK5TWqafDvZayiGsCTgBrSPw",
  "key18": "4d58zmWwDcEUTq3657iGYPE6rgMQpskY112HjdAEe5K2Zf74tzQTUsvhwxc1LagjGDNTrQHrd2HjGGF3d3S61JKG",
  "key19": "5aYFgNXMYte9Ay3TU4Mtq8yVUBUHZ1eT1bTK7AKfFz7BydYGkS6zTDUgMZ1D3dgujCARetL2QLQhztqaukjxy3GG",
  "key20": "31inu3espH46rhXAa6ritugt1D8vEvpDCrr5zJzCTMmMcRNFQZDgPFGMo3CjuVRQPC4Jpwmz2VhXiSMPqL2eiXQD",
  "key21": "5FLnAbAzaMAedtuQW9D3A9yz8NgV5s5kvtdnSAMAEyM4hxUb5rmLAZ5BGhjB9sHJHRXGiABhh2wn4fdR1DcBYHPS",
  "key22": "36L9yf1VTYu53E6N7fN4PsEY9acNfrRzpqFLJfrNSvgG1XvxAsshE8cAMKUzExSaCvRvQHhLXso4A69FKMwFttNX",
  "key23": "3Wwv1cv6nN2nLceSsZ5fGLWvuoM6wzUmxDy2D17SKb9VjJQkKy9zcZkt3As1E39Q1bTm6F3is8T6vt7bKTeeT2da",
  "key24": "33SB9o5BCuYYbzMpZLfwVYVjPtTZdauThZ5VgbQi7js5qE9LVwTZ7effCGBC7iYgEHLGpn4Cda3DzgS4LBsHr3Bk",
  "key25": "3G18MjHuxHeBJqrE9N4EyAr3dNrkWX8syBAaza6iHZPrxWjnnS7RVaWhp2pVJMaTaNduDAXmRpTe4m7XSwupo8rZ",
  "key26": "wERmbJAe4YjHGcbtcKdhpkNHCKH7rMPSdrTocjGKzT9TKhrbLicBTnXM616gi2qx2HHYbDTtizKyMRMohnvGLjK",
  "key27": "3SMgwh9BA9t695SsKjw1NdiappZB82Dq1AS7EEngLfGHSnLEHEhzJuWysZhzqisV2oQ5gz3L1PEebS6BeWF9GP2W",
  "key28": "4uQQUpRJBguaoLdBxUt7BDryYE1ZTNE4ucADxYuuyj9ErcbnPZDQWTEj3ENjpm4qFMr57zzqpKCxCeYRwyfSqLkL",
  "key29": "3WxaJjg1s3fAbeodi3r84Sq9zLfY3D2zRNKLwLW4c6KXdvQ9YyunGzLQbnYouGV5Ko9Gc8v3iSiDYe6JmmNHAc8B",
  "key30": "45RwcMk6kTcsUYtiiHS7XKD3dX9op8uSwcUhhhRX7maebT2RuKxC5VbivDLqfadhNrZQr7q42Hut2ewiwFxmNM1K",
  "key31": "5AQ9JLhxGzhT3D4byqiDxsWehzgU4KKiLpv7Q4s1KozoiVfeKTkWk4a7bmiiukDfxtiuuSB6arWTRcRb6YK1zSoF",
  "key32": "NyvVNC72g6AeSHGPHPWCdbr8hkpMcGwY5KsPyYgv3wE68NGsXTn4DCBLmTGXSaWVfamr9rEvUEkFG5cx34CnMXr",
  "key33": "2p9YWk38VjBi2dyc7cEbYttkksBswa4zJSAJodP5S2Shi1u77qoSfY8mBXuDKgmRFfPCYfMLrD3wUB7FQjrvPCdc",
  "key34": "ZDEcgH6hEvrXvwBu22h8FgwCeJQPqn8cmEkXpHbsk5E88hdHUQZhKR65Bn8uCDcw1L1SCHhej8Mjo7fEXhgJG3p"
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
