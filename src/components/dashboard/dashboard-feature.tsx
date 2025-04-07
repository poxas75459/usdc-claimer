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
    "64fGW5tNUn64UgRAULaYgWE7jH4r82qCxR597eWg3hPU5tzZY7iQHm5jTrComWPdZkDPX99GdyAMFyx1JvzsBMbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kz6Pczzu7zBBPK1jVRTaHXUxV5QfxfyaJGZfq89QWfpihavLnFnVUmLdKKS4cE5ALbT5BKHEcTjm1bnDnQ7Kw6B",
  "key1": "5dNWmSVWv1rttuDuusHyxrSmLq9uYy9mLnC8SnKVgM97kWfHR1LwPgAg8DSK4mzaKVuqxGZ4FH5Q9z3hKujeG8Xj",
  "key2": "pa5DDGbxVCkvnFFdFarBUuunm5gN2mkGrNXroxRVtTduTKXesYmETDDYUQJykhKLPCLEuVnmSYTaycmhTYiprH6",
  "key3": "pTnNVDd7PGeCVnAkdmsZjLB7uFCLRBB9YSehAvLE1wSeozKA2tmEfD6M4nDtxfdCm1chS1VGjt9CEECwnfNWD5L",
  "key4": "2dk28Aurf1a19G2fF8Pyi9VjkETqQUNx8MgYMrhUgB8YkMcYsG53BQkT7viHDeBcseo2SYSPRbSq67SscWyPHyxV",
  "key5": "47r7rnjCjxRR9Edk1Eyyej3qUuMHdGgGuAgQrbbouy4E9h4f5zmuChyHYyfk4NwDqggw5Aqd3dA7b6nheUfeFHaQ",
  "key6": "eEhF8BksWjd5JhxedYrgETatZzVoZZqpMarsAn6yMFB3zMXHvS4TwVSifPdaWbzdTRARwQABS2emu6imkew7Fvt",
  "key7": "t3LrRxeRRgGqPBPFKMicSoeoxvPScRTQhY9HeVJaWJiZC8gwte96MGe3vzReDFyK8NWSc5AqQcZbRd5s59GJ5Af",
  "key8": "LJ8YLu78x2G4Lm4NeNTJjFKNLzavUNhXpMzn91642buh8mbBRoo6bXeUkq1BpSHD74JJzsWTrTbrSSdYiUD4eED",
  "key9": "5U8riHdrBS886qaTRiobCaEmiaXRDPGWTBJs6nqYPfUqKWkfm7gb5pH3trHYCAi8h8rCHuDhgSGguQMyyvwV3dGD",
  "key10": "3zoYtizDdHWBoFi86WhyYxjTvYmSaSWhPKEPySip1KSM2ije9YggZSfhkeHQRg2BTzBXBvdE3k9EK67pgTwyNmZw",
  "key11": "pZNEgarzWvsPUekjq5Nf5p9V2jnsoQVVQE13BjxLj8dvH98x5ybWm1hH63ovjwRFjJqrooZQxYkymENdvnCSueY",
  "key12": "3puPxqTyCRwvVU5og1JDybMMj64YPFNH7ZWVEi85rWMiCX478fxr5ggyw3M2fwDWFzXYb3LDAFwPygxNk1Kw8pUW",
  "key13": "5kRn5BaStYfDyPEHshPMkKyJymRmUDA8nzAf6qL45Seq1xc34pBwxUTBC8qrWDD65TN7jQuoNWW2xHqaj1pehcgy",
  "key14": "4H4rTtm2EYWGJRsGRAN9xrQN4FWceE34CfJeWT7fFmy1HoRZ1kvYG8aQWjhHbmk659rHXtPzpGxgRhHBXzrWYoeE",
  "key15": "3kc2mUGARhjPFY7JqtuvFrtdQpxRd4DbTNN9XpG6K2G4C7BaBo1MAMTpArCW4izUUuTHx6P4PPFnskNDfS2QDL8E",
  "key16": "3a9SEWiW5iC7Bm9gPgdq2a3WUJPy7cckF5UCfC7ofMaDJfmLTUr7GwDoVBXR18qjc1ay3DnptLJ72VE6Hfctsx24",
  "key17": "2HrPZaaNxutcRJwU9qRxRuXy91QRFynhPTapwFsJheMb6EWknDrvaEuAw1bZs1JCyBjsfpeLdrUsKvv617H8FhGb",
  "key18": "oZus7uTTPrRXZp9rB1MYcJ8kyS6NsZJfGGgXnMMvoZgi9TrtmxEH1ave5jUtGSxqs29hM3M3zTgVfCUzv9vmTHe",
  "key19": "53joyzYWkP56BGBBmCQWRJQCGLf9Fav7uhPVP68XXumo7ZkyuTw1ugfBpYczwAiBH1wehGHxwf4r2zjQLhSEUXtN",
  "key20": "mzA8qpZ6sYuYxkbfWKwFVfrcJukdYXduxtH4KZWwvKePsggHJjztbf5Sb6Z3zVYfVk7gbqKa8Ko5QJH3ckzoeqg",
  "key21": "3mJt1H1wEG1eEts6TZbU59BaxpDGVtPyNTf7MzcwsLNznxCRtvd9AoCSqtVffGVoc45inF8yAyVtW82CduK2homu",
  "key22": "AbgsUz7fn2jXWwvzRJGLfnEXdRV395bCk8oJr8SH5TAY2mGJ5BnjKXbHFjJ2yaAJUyT3PD5889R8AA1H2Ri12xX",
  "key23": "6jhxQ5YmxDDR6LtQ22LkMyXJGKKhfw8wGFMznXLqAAweE6txV6LRRWMtKRSgdYPjSdyv26vzF6uSFZLUJ6kNXNp",
  "key24": "5jKN6tQjAVrECYhiob5s9U5N9KDPHnZM1Zq8zTQWx6n82Q5XejtwkBsdvfWzGaRY1fHVRwatTFTLPAkYUyQhx5AV",
  "key25": "5woq5WzYoL2UGCCC6H3xrYXgNgsUDQAcvSwyFAC67NrjbhqMinqr4RrkMXVmw6kwZvSPZgNBmWkFT5xg6VeSpi9Y",
  "key26": "2k8YjKMBGzsNzNdPK59f7aHmc5ue79Cq7jLFQoxKRBJy8wkwB5YmZhDpFa6GXp9Znig3u74bTooZBdVWhyogkotw",
  "key27": "HhFvCZxxgcs2sZC4c92sfKtH6YbFFnK5NPE3GCiT2KEJPqASedNpxktgYxUjZH8ryZWvnBs5GToxRFUo3kpx817",
  "key28": "35y4qhm2WrWhH4pL2S3DiD3NYApowvq34iCTSBcGMS7jaG2p8H9amh9JEn1Lszfoif8gRwdeS135enqy2StcpK2i",
  "key29": "3EuCWkEzxWrtVuPWUWSwRMfc1xubgphCT11YMaUExfZnp4ZfRBghUnPKqpDQCKJunZpJpJVuAAHBt2KhgembGyib"
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
