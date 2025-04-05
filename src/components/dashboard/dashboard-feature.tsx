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
    "4nC2m5N5BoZa4zSmCdw6VdZRShsBEjXdvi4BfrEDVo3W72axZJHvfPW6x3LtcCX2mE4mfHzVuB4Q9WnjUvXUof3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMWiftFFPJzLDt31WiRjiwLwFRwdoCds37iQNYyAWUycRoCtde7EVLmCDuKboTfwp64cbhGiiu6yXzYX86BhQxb",
  "key1": "3GknsYivXKxEYSbWKBkyjctQrWgmKB3LPLz7US7qARLJyfZpfLjSCVvB4nfidAeSiaREjc8DbfJ3b5R156rbjQem",
  "key2": "3cTMVCPL2tSi3xD9EmbpvwAzStQWwKC3bQtwYbCAfsBCYWCZtmoQ78TyyMfykVghU5nRXYFXuSm3ggzZW2FuRtc3",
  "key3": "4Jq7cR58FLrjZpAGt7KFxdSrAGjGFerUKVxhKHJAhPnkBNUpaKf4gVcvFaumB3koVHBA1ZPm8gpuZmBLWQ469W2d",
  "key4": "2ZohRX4jQQFjsRHr3wY4X81dREQ8xbgeSMjLNygQPw7uVAMZjSCD3j4CiMtWJizVSJVZ3wxNat9wphZJfk5sH2pQ",
  "key5": "4NTRZDZHqqs3G2cpkKutn2qrNv8xbsHtTE232E1cmjHFKdfJKimHHgqEJ2LnUiW2XSj9RcT1B8sqErV2gLm6bP3L",
  "key6": "4EHwU5NbZxRWjahutezddWn7ACywZ5JHDezthBP339dhX9cLwAp43YV98ikVfea8jsrRZMiLtiovcNdYRPdaHbeN",
  "key7": "39s8oeSaYDjgbthZNTF7tBzjArLvW5viUfRWGvuoCMfKDCAvWZ7T14bA4JeCCERuaYgqBuccVpaqYbKoLB9zJE83",
  "key8": "3QkjBadwcbKKAiKFK8Wysz7aeBsG9Lz4xK8nTivmS9SKxHYDEjGsetjwBKaGVuRXJMZifSu2tdXEPsEcj5DZpBAg",
  "key9": "VJxthPpQ1XetecHffoXCUBJM5ZRupZqwd1g7m4sUUM67fstQdobP4jQKaoU8r33uLV8Jd6BEX1ncpm8DtCc42Vc",
  "key10": "3JWQfqUiRVwRF2oFShrMac5sYwBGpt7x5h4TFbF6WzxoLFdD5bEm63KPNV71e1TMHZSQaVS7iKuB3FH6SwNxiMNf",
  "key11": "5UejQT2bjqbXYuofZxXFTQWzSzoeYVUxoi4v5cNdZTDGLvFZyHh8zHSmzUb1a58ATdGFDUYk6UGocsP6ghbKnmUj",
  "key12": "29UBLaHMVzpD6WkDTrqco5LxwXXGGar3NUG2Y3sZAHKSiqnkDL157XLi8QGnn9hKoh3DQaX9QNzvSubL4aVxZfEq",
  "key13": "5pxhkJrJVRqcbADt2XmQkMsAupsntLGtcYdyiooQKn7cchF2xsHDPxGcPe9P3D8Mk7KXy9nXGnV5xKZFmgfuo979",
  "key14": "5JrXXEsA8QC3zi732mL2Cj9W2BWixJFZfPD8FTQQRwhQDFPiqnZzfgfYPGKbj6WojYQUpdHRuDHE47Z9e7EPJ6oM",
  "key15": "Pk5CPAg9vqyrdb4gDwWTLznAHYGFhGMhLkWymf6vG5rgypZ2F4a5XML7zoafLjQQX99EozsyEZBXg3ApUoDioHw",
  "key16": "3G5BBRPXks2PmkhcHd4fuoui8Mj7n1ob8Dgb88gruKNqnPe4A5CFwmUPZ82rkqnEr8E8EzLgNyqPoEKqpkF9BHjH",
  "key17": "5TgoUNnkEjbS8TXxdsUZdd7rZgPjV9QQ88dWxgW4VS63aUrrN9B12cyx79VfhKkG81raTkjR8F3EgboYJ3hCANbp",
  "key18": "CV8uYCmb8kL7dZmHuVLFFhuspbg82w1Bpmf9kLrC5Vjr4Z7yfzjkGrAM8UYQXcWKgKko3UTkoppKbauaRHopwxw",
  "key19": "Th2Ln3bYGVBqtqBgU1cnkcbQwwDpTqzdQrmf4zNtox9s6CHifV5Zb2tiRcf15buQM1QZPKFB4gNQNpRLYuHYKdF",
  "key20": "3BJHhocLqFbHANYbR2rAKVp8guBpy3HhY35PN2qQDvPihdHhfpcomv6fAeA1nUbKKD6v4PMGVWmv6zN6oTFRVn2i",
  "key21": "3HyUXZxZGdMc9pVebFErUXMb19X3sSQFiQxYcoCDsMLEgU4ARhfhJwHTDtjcnQkkK5dTJqmukzGdnGbXFiKCLzJ5",
  "key22": "5EFt4rxw34V78azgaz5BgwmABQexrVGhfYx8PGV1mghSaEt8qQu4oHtVtCr6eoUs8tFBPdogNL6rum1cGzV7m6TC",
  "key23": "5kE987ZzA5jqi5q6ooo9uSB7hcLnwuybLwTiTHBr2EtMkB5PJKRGRbeGkSo3CA6kneS4YpLfuyjXRSVdx4dNX2ms",
  "key24": "5SnLFKjrmL3ENWVwiprbEkwpfYgFTmeV36KxA6mWXJk3C9aN6DXkdrGprALsj4M1EUAW13Nksf2mXtV614KEGCWd",
  "key25": "4DoaoQoNhv9EsUYwQgoFkKUTGgmU9Gr6fWp9f1Az12KWT27D3BEmQgDVw2AytkHLbhtcBdct46hc9E5JrUWMKGGv",
  "key26": "n1Q84M8SyJ7HnrbcFwMF13xyhp8c89JNTkjDUDsuCV3wgyKesEtjpj8Y8JxXtu4ZqpwWYuPn9MHRmVXJoFXGNq7",
  "key27": "fCAWXyNX21yE7xC6vaUKLe8CSNc96y56fY4fsTAuF4KQ1BgiUjXEA9fcX9Y6JiRrRwfvyndUuxVgJpHWWwdVbAW",
  "key28": "2DA3vuNnpBi5bcK1Mn4DCCacu4RdNMYhsKcd4RXV9TrsHouC1QAiFfVZZuSeiAkj7Me7q9xoSk3mp6ZZ4DNgbzsh",
  "key29": "4wTFYFYBwwP7Aix8AnXWiAz4sjeMUFEKR4rD2oeKPNXnLMvYeuVVZW1S1cTzjkuEpHX3GDZbJH4xVYM2c5Av3Fgg",
  "key30": "31UrJTkDWYmT6K2NoakGXiS5KZjyVzZLBgz6YLWqkwj5t718g3epsAa9DQcRkoARo3hKsq3hRkxbpV1gtfu62aJR",
  "key31": "9CqkSV319LHZyvDwKrkM6EtTzFQaA1esbZfW4GLPFsExC6PNkwZpPv8H2yvyNdcWFVPVwoeUdxdHoERybJzGABm"
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
