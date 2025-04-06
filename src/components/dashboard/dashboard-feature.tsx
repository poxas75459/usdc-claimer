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
    "3UpncT8M4643atMNq1Sd8rzPMNst6oZHrsMxCnEUM6RYJgVsbccJWrde1nt2szgQ5HAjJfMpvT6V2j2xddSx1MrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjGMbVU9eEDqZJvtJRmmZckyoJCz9gdHbDetSHLhdUuCe6F2FesSiRmW1fc82Qa6WDnwPrJB7jvStshW9cJkfcU",
  "key1": "3aVt2r1qeqB1YRzAwYh1Yrf7MBNruaEmBhZcJVsKPAnJXqZFyqX8nXFpkwHvXRFfBa2udY1UE8Ca2Mp7MieaRpPB",
  "key2": "5VBhGyU6QjkvDk2dkUa5cYokXT4Pv8jqci6wHFZf7FFrivBfgwFX7M3PeVLRgbT9TiLndQRAc6K5LhFZqzTqfJwW",
  "key3": "24cXksYsVDUZ8a1U6PHAjQ4R3CHGQRJBpKgCm34KtykcAB6iLyuXYRCagzR57WGqKHXwuo74iys6eWKWadAtvAU5",
  "key4": "3dLgojwcsHiTh8wSvYrycMTGtv8xQq9DGbT4MZTUVB8KVmtCy7zQHQb1VBe8QWHTLoE5tgjQV6QuAWRpebkD3C6u",
  "key5": "3FFCReaJ4pidotcjjdNNpZDp31soRZDUspAyAH1wtetKK2uieGyYS9osijKdRzF3pTZdhpkZ7Lm84EcL5SPkUj88",
  "key6": "3D8u4cTbpoG3dFGYv41jvHQb8jvmb5BxKMvu2rdJAMPHzZuExFf4cgsEcCnwfB9QLTCBieXL3aXW9YxRdeA5HNmU",
  "key7": "3ArQJmTJaHV1oqRYuKgiaDxTJFt4bddbQ8uMnX7DuJPVcc1dDbuHKsZS8qB9KCnW5agkfoieghvRrs8WmuDJC3dr",
  "key8": "2LccQ5vTt6xgibjMYBWnn3xrFMxbLeA7w3Sykfwpvbe11Uif523DffHtyuMZJe8HQpkaaw5mgBss1wHfepKBaWaj",
  "key9": "2gMuVzzsuENqWMzo7KMiQzizhiZ7YhVcphEQjA564Z4DbkN3gDU2DBQGeX83vt2j2sgLkjzzb2jJWtQ2WweUNsRs",
  "key10": "3AnajTjTn635SJLqWMgLPGsh313NE4oHASaQkUvVnFMGPtbCcrtnbTStF7uN8erz4gKVDTJLp7tQqBk4E4GvWyva",
  "key11": "2Y6Hbhj2Ko2cvpqXWHVLiw52v3v3mXjUv8chbaZhopGRod26WcPiSwpi4gDLq2W2BruWGbYBBmLA5BTeRfiwvSQP",
  "key12": "VWDo44xJoQww8HS4RVqgCzo3EsGan3bEk3GBH1eWKcSBNkVkqeejJPn1XwPip21ht6BwSDGzm4kshS8JZyzmEYX",
  "key13": "479zBTuQeTstQgZAXgTcBJ1TANr4R7Mg3BzEPF59bX3ZxAkNhewa6VHjctWjaAfcxtqLvx9qFVAzxpEiJ2xCQq8C",
  "key14": "3FX8bb78VaebpXKUrWv8fMKkKEztmev9DCqvMboqznG16jGKXtfSnczqvXbcEabV3MoKhdvroWMbTsguoDdo97k4",
  "key15": "BCfVC4evExNzGKXXs8s2LeK5QydSH3JdRu1pHqW2rjmguooV4sowpnQ61T2yKEfvMNzveSkq9VCTcFMup6AvcTe",
  "key16": "f6CCuK24RvWNpQ8Z3Qgw5xKPRf5rF6TBn5z2vMi37zKYyPPL4jRNgN5Hb9QpRmzK4ftBxK4Kbo82CBdPqe2FKnB",
  "key17": "4N1MTsupZtRjqtthnnPsAJgsAZtMynPBBXneMYQLvxDeCoxHgBwZ8WyHgXCPK2QrwygLTD29Ke38mw71v7egVVMy",
  "key18": "2NtPDNVnwN7tm4ocBKPggcxz7rs6n1WuuZn1QwXz9bZP7spdcduDTqq1TKyLtaipUrxnMSwxQsu4RjvJcQA16ueN",
  "key19": "Qf5KyqpS8N3JhJdjepvUEpuWaSj8RAN1t783pg6ED9ni2WuwVS6GANFVmZZKqoJjcPe2bAPa95B2qsrkoCc4ebL",
  "key20": "2L3A8MYmFaMSTKzJeaVPhT6gKE7HWUtPozWvMg14wL48vZdJnFPu5XXGFh68NZiSFaGNUNrULHUZnECDPMDVp281",
  "key21": "F9qEQY1mktHm3fmSPH6CRkn222yrH3tnA528GM5Q8WeSEeusn9fjTh2ecKsfVX27Us7xiaQVZ9m6xPHEnTPnw78",
  "key22": "xi8yjCKcvuQzMhoKp4LxF1GccnH6YRkiDoDiWHJoMmXLcY6cjJsszZkWqDtA7g6PdKe69opPZrUdZTiGeNiF1LM",
  "key23": "2KaFfsjaQgrgfcPEYHWxMdTTahNyua4uCUuaXyrgn5yQZFwJjqxo9msSLbSAPMQ1E5WRYR4e8sTDGcTmfn1bnq9Y",
  "key24": "4t9czDaVZJrLiDcfVKppVckGtBCL9snZorui9L4bJigSsAqhJULuGX7eLTfVGEKP8Ar1NsP3nuy5mMspsgk1r7r8",
  "key25": "2aonsaTvFcc3pwS44xFFFs89i1tmZquovQ8SEbPDHzauaGGsitMrEpZXQcSSMfXBQ93QqpppbUNYzMvd5PTWCV5K",
  "key26": "3hVv1xmBEjARxL3HUYYzroRYQaDUkMRbzkYbYDCAsGSN6XQ9qKbErGKRiwzurnPk3NDVCE8RyYfmP8QC1iQboDZ6",
  "key27": "5UmbtUoa24mUUftYgFXT1YoScfXNaYLfJ2JG8PrpAo3Sw5WnfAWhkVVWLWFgqiDG7TudqqLo3mXrr2TcVwBeBgm5",
  "key28": "5pHjCBmg45wyHnDo41CL8gTom2BcSUeoXX8FYhv51QsbxkbPiPveoc66N4u8KAwGyLq1YskwPLuUNWvfjGQTEJx1",
  "key29": "3N5wKWSQJqM7M3kcabjHokrqRG75qLLpCrm4B3Q79Ea385U3cXa4NavhTvm98MoUmtj3Fq8yV552RjMyZcc3WaUv",
  "key30": "5KHyyfVeLrGicPbWHjLsfqZMzXavy2dTMvMZWg43wwMAwoSWLcacWr3aotS3nJgES8VTKkJFABGH2y7SDYtUAcMf",
  "key31": "3HpRfLECcH2w21MRcg1cXpTxynwZDJX6c13x7kZYXV1gL8P9QuSoW3vzs6LaChmobcpH52pSUoRdeg61xFyHCcM9",
  "key32": "4EQGh15ESCqjUVdwQ2cCRjMbYfe5SqSvaYbzhWUmJr2oAtAWtWBsJQEAQ8f2eicaxdYiAVKKBSRvrkfyZxQq7YYb",
  "key33": "wsWxWr35pgcKzgEtYs76CAn97nfAQZ9UbcHbAzLJGQXEuCDTUq5mkvXnXQuzq1jEUT2u8HUQxRPgodnZBCZFwGv"
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
