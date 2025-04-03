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
    "3No6scgPpLGkaYWtKJDCxT4ogjCTHLj84RP8DyDvAkWVjAFynFmeoNemqCQF2MURiLJpk2SHbCCh4wkc94L3MaXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Cv9mRt75B4cTAnm9FsG7j5Gkr2tmaZmaNj5kUKiox7ZEaDuPuhNbFUKX1LL6vBNhCaiKfn2Du9ctgHM1xaUYxD",
  "key1": "YyrCPugCCNzDhdYyNpHACAVTFjSy19PBvJtQvAUvkkbtQDvq9CzRKVVmfd9HhvjdsairLvR64pUuLUvU9KTRVB8",
  "key2": "2tthSQ9d7gnGN8EHbafLmedfmBDZixKrozLqoZ3xmAvjAt7GtZt2C532Uob9S14Rwexryrm39XW2FSgxuaAvqQGb",
  "key3": "2DC2bQWkvCL7DVgm6KfvxuJeVoLpCWx7NZgR9HkDZw6CCHeV5LXLpdG8syFYcCme9TLiSLsqBbWozFRDww7g6MVd",
  "key4": "5ULyommLGKChNRAK36NZgVj7os6QkkzGqNsR8D3qYnxBjCTTrtM5J379TDU1PSBmgDE32nDmSxwZN3Lpo3AucknX",
  "key5": "4JiMZqXeyj6xfJDBWCLaqBMgooXzT4GNqWr86L9gZWLjiSCZ4DUimESkiDeDqVhKdAwRcrUebgUWeibYFx7P1NFu",
  "key6": "5q7r9qntcWrLdLXK3tgXEr6dGuiBWxt29Cc6cWe8RqmNHzgHEjSGvRi5g2ZmakhfxNsCpmYyDZxp8hZZf4RZyyeU",
  "key7": "3gF5N2c99rUxcSy2vcSuqXXTTqNEdPQhMTBQtDXEd6p5SaNni4nkcgyvTePXRqt2fUjoVphnHScvkp9kv7SNfPtQ",
  "key8": "5P9amweivv5A7fxMXX1fGjoZGcJwbxjcmAEN71edXR2BHh8cw33qLZWnyBViGEGcEcZDoHfMmnfjuvBjXBffZAb4",
  "key9": "3ABV1iye4rue3B5WT6573MV1VoYPKQTHSuQPrPUwUbQHhVkxVHVGd8yAHKmheCnNCb1S2e55m68ynqyhWX2j7T9H",
  "key10": "28tGeuDEY5qHa3EGMZZXETMXwjdKB9mmU4L3fZNnNoRqK3ifM9rVSYDsPixLJPAChrrx5YqnoB8uBJWAU4Yez1Ex",
  "key11": "5CEqVXpq6QAPgShgYYNEdH9mrh3D7eVX3vLaA4W9bhMG5QQC8seBnEJgpxGgHjQCwpPzDZNBp2AvoWP44GNwtWuB",
  "key12": "2QA1YHX3SqX4bUu7ij2rYyqRGffWuaqEfyRjkxmqT9XrTsH31H2gcXUazZcHric3vGEkzsXAq86BRuNAB9mEGt92",
  "key13": "5fxTpP8anQCpQipiV8NeLKokanSzRbsfV8bxbySUaC8j7nmKNCbbAW979X6oZNENjNm1X4P8iWechAsz6Dchmdei",
  "key14": "CbcCaCLuucD6KmMLXFfHu9MZq5qnUuPbqu5Ehbpwo5YZRY93qAxK5JksikYmMFpEQVgUJj1z5C3nytKngKHu7BM",
  "key15": "Vm5c2AXfVjB7UpUGGnwhA6boHswvRVP3NuK8NqLbGdMsU6wKnQA2sHwt759Bwfc12XtwunaR3nmtyhgLo4SN9Up",
  "key16": "5ZnCw6GheTJ2aneG4w9YAFQRNAK8UEkNFL3Sv8A67EZPj1ZagQ9ePFTQyiwdJLfbhhWHQnaUnNaHR2kMJej2D9kX",
  "key17": "36WXzQjKgCpVdXJATMsqMsBHD4Dst9BZUGtpKoKeQK1QaGxmA2dwGxWGgWqNxmZoM3QEC4Ri8ZsZFkdUANM1zeaC",
  "key18": "5DMxnnd6qYpHdFdABRQKQwNRaQJLqTCitrc6LL4rCynyJJXrPHv6vWWxvXWCGNJnp2GjmSNyB4xLpziFVFuKaboY",
  "key19": "4dZjLA4NBuu9JqUMQT9LZLoqJpqVjHPUquyH5ESFTS5iEJRZgDgS2YELB6CY47e72Xadc1PeVWE5WY3YnL3tQkW4",
  "key20": "5aoynRWTfuXoPFnrvGnRHPuowLwaCPRm7LdwsvmZdwVXRNMdRr1Ewb1MBKBNLpfbrcREzCj2Q2xupcCH5ZdecFji",
  "key21": "3vGomBzVQ2nbVTyJ9kD7dXfScpQ4Vv3hx6Gp14NKsTmCzduzQx1DCtsvaHs9L2JGvbLD65wJXtUxN9gRyoU4pr1e",
  "key22": "46fHxmbgiUNAuN8pZkFzsp4VLnpbhyx76VjGxDARjcn3qPYPw5TZdxnS82CZmATqfMrkvKq3TsBXEHbbCiAyB9nt",
  "key23": "3CT7fWWKZin9jfMmJdNMpNAq9xNv5EN8jwYMUPnV82omt9AzxTYZQu6qeqDE1njq2enzc5TyFawPMaqwaFRRLMYw",
  "key24": "5PdfioaPBCFU4Use7gRRFcMJKosm1YiUAg3Qac51Bkzbp1mwXo8wsUTmLnocJHwx27dPXsbA1fnrG2RbpmzeJuZ",
  "key25": "4F6aRkMv7Fgg33gfA2aN3G8Eq6yqYrXoV89u1YP8bZU2Tcvfpw6s2ED6zLXsek6s1hG7v2yrsjDj7CnfLQCQov3S",
  "key26": "G7NC21ArVz42Y1kdJ7FPYh8oSZWtHQKB3NA6rgRSjiFsJNY2Rur949P7GmmuK8ALfmNBNTo7VphLeojYV7as4GC",
  "key27": "aU9LnhbxVznmJz9tY4pU8qxmNRfNaptJTHWJa9JmNXbDKjbe18zJUTtQULef9nSJpKtpZQJrrXHc9G3H12cEoG9",
  "key28": "4oQFWXPagRBMhhMrsXiZ9yHucLWZm673Cb4yjitPdgd8mfswvYcTfYdiA5j7XhYd3n43Lxp3pjJTLyWSyf2tS8Zd",
  "key29": "Jzx8dpLYCBYn7Uv8wosDWbvsqXDRB7U5vqv2ukWw8zddThBPQcFfpFmiNvs5vqfKLpJAkTYnzERiyVwfsQZM16L",
  "key30": "3sPvAAMwP5J6J9QcZ4VaTBAcjuoRXN32Cg9rJexdRot3YY9dkBgouppnNLDu9TEsiajJE2CwiYbm9h3RjvnFi8jp",
  "key31": "3ri3qiYLWF68yCiFHWc3jHKFbxyxLrveVaHQQGcCaRF3kkgxTzmV4pSpALK5boQJR9q4GuJmiZXeNrLsBw591But",
  "key32": "3BREBPBMpCQvsSjpQoDYbVgAHia3zSTh7QkcEDDPFxy9JCWiyk6JDjKJRKWFjbUv5gPntq58EscyM3sXCfmrT2Eb"
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
