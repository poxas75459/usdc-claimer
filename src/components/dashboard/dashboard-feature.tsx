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
    "5WwBg2tMueErMuCDVsfScSdqvuFUsLX5Ex4rb4tQQhEFefc1SubAftViWtCpMkaasZPzhsRP4BM4tgTbaW8uGwx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLHx9SCqQoUf6xtSi7bJAyuxfcreXnnSpTQbeY6s9BBzywC7b8SSw5QQPwdTy8cP6dCd1gz7ZKMG8vGdhkZQFxv",
  "key1": "3zsjtVLpX6p6jJ3SquuVvaU7wTLWoriX3shrrUrTRQQKLXFHWYagprDdPAKWTRgWoYvq5EkgYsGPtPmGK7kAQNRF",
  "key2": "LbSSw7jumRAACmvQk6n8Ee5Tiw2iqYVXfGsz17qcvhvh9aQtbXxLhRoYWXCKCZ9eZoD6LivqgJB4Z6aPMhxMZqE",
  "key3": "5ugijBdPLLpHvMwEoibFh7GcwH45J9hwCKk71xJUF89FMFDdCsvN4vbJeR5Mrqk1ZouiBs8hq5DiuRzJRkHMmSjC",
  "key4": "2sLHjmRCxZeG2baoobmgWvmq4Y15ZYVPTKrwk1G4GWhEhDk54tBVmo79nCE2YZNW4NZUaPwWzR4TFyF9M6WnTgw3",
  "key5": "3rRQ1fjorva5x7ZDKrbbyueAs9xzGur6tVhnUBfn7JeAShgBef9hJKtpfuEsYZHo8v4SPfeE62Urs6dz36ygLhAE",
  "key6": "2LztH64w7keeyv659sTkwRnDnTYbPvf8rwwRyuMSjH5JbrDcaEf4YGGLiSPQ1QwVV2fddawZxxH7KzVFpdQxLRny",
  "key7": "8e4pjif27Bk6cwhTQjqVwxdp3zA4uB87Y5oygSmDPVcULgNc71s2DXoMSsRFGjtmjAHDrgDgWuYQZTgvdw7gRzV",
  "key8": "4xi4PhU7QRgcJjAQvyJEtz8RJwiNU6nqKpyGtrM8gD22byQrgrtWB7VGLtja4AHKVStTmsG9vznHLWRWrDLephWn",
  "key9": "WH6EmecJ2EpYfHiDJnGQBKwC33gjxy5xbMaFHDwtnn8h2GJynJLDseFE7EaoQhXP5iu4R8L8ypuG4AjiCeQNvGw",
  "key10": "3yKVfcHB3joT6NuAr2nSpj55ZARyuFfpN4wX5KRqLY7TXfNk46MPLZtqzpjWLpGmTszn9QtfYxZtSEHv4cWT2MZ7",
  "key11": "CMQLkGy6qAmoEzmT8CHKN3wLwkPzvhKV8ZFVvU65o2fLZejynShC86X9WFrtQKJzYtE5VATpAwFwVfnboRPSwGa",
  "key12": "3UVkX4JgUHsquSQCxMaL9pTmPnq72Lp3GGJNVLhbP5KZ7sLAHpFRqAcPn66wL6e4BmZPFd5CTqiwR2v7G7qDC6dE",
  "key13": "2WR1GWNscGdMppwQ392jr4cCfT82kcHQB3Bm7BpXu6srXmGbwVFSrzRx2rffuX3sQkEAJvGk95SwWC3aja13pGym",
  "key14": "5n32Sdx7nRc8VQ8nfX8DrGG3Uj8dqEBStmarcQGWvEfs77vCfZ6W1ykP2KT6jv3XVXH8uDzSCtzi7RhgLN8TMJSb",
  "key15": "5k8Ydd1HZFxYzCNmpG2dgxPYTTRhvgBDKXdCtfoGh1jKeiViKA1L68DJ13hPkQveQAw77MDdK4YcfQM6YywWNBUa",
  "key16": "2RybxkNBjpG8KgAVkgKn16SoyKyGgdxxDznfhkCC73pyqcLCeSMEkyMCq1kmda3WLWszmkRP76JbNcFTNFw8aW4d",
  "key17": "34U3kPkSQ7zy72VUAq3RZExJeEzAzSC8JP4ARw6WPFC9Jrrmd7dxJ5DEYCbu2NmoApV3XqMRARYFpNR9cxqDBL5x",
  "key18": "52roZyhrMyuYEgYF9z5aEW3Lk9MxgU2zfdTxksKp8cZDJYUeBfS7AzcSS7Db3ZnJnM31Zprrprm23vUT6vXy4KFQ",
  "key19": "45pTgd6oUbkgsnmSBgoc9Ryj3pSVYu6mogwPWp29m2nTWZHz818efsj73DjrtkjeAqr7wnuuPSp5qG5qUsGT3WWp",
  "key20": "vf8ik6BaBYfysqGfrWWHp3ZMiPBKje8noj3k8Qnz924mUptbFK3XVpdrDu7VUi4XhN57DSnPNyWKkrfH8FFkFZg",
  "key21": "27Kkh87Pv8jhhGcwNqvYG7H2YyySNq1RjGYYUkm1zSjmKqVquQtXJJ7esEDMo4s1zKtGpTRnY5ZEWLDZxzBSuAgb",
  "key22": "ugspQwp7Hs9nHuAmLS3mxeu4xfrHmL2ZibqoX9uxJTsMTno5KCWrGkePxCcKvWQuFY4E1i8gJFSExPG5kESLHKM",
  "key23": "4tF8K9NPU3Q7NJTekJidBrVKyKP9tjgTYPaRWEPPwt8PS7adeorPiPEcf1vZ5Ei7oUw2i2ejeHC3eUadJjrbKaza",
  "key24": "HiVzr7ogdXMxhiPuRo5dS5H5mXN3nUsPTpoTF4hYysqdVLdVb8SufDbUjfwHtga29Fkf2h7PokLnGGNiciMf5au",
  "key25": "2SEqo96euHPdeyMysSySyh9PEJyKs6TKT2DFg9u2uHEjr9PSt6Ch7Fmq1LPT8jPPTudasCzSN2Ebyy6b43QqkPua",
  "key26": "48qMcRU1BJmDzRwRT1a79pCUm63nDuM38E2rbsCiMUtpXBYSYZAXBFEd7x9s2rjsgyUG8eQ17FutUiSM5KBRcDCb",
  "key27": "Atx6Cf8ZtWv4XLuyaBbbbz7Rht5VzWGifEizeF798zVxvVYAXsq1oijaT4qnSGWEdwXMDMNnVeTiHucbt6UyAVm",
  "key28": "5zss2hcMamwpqR5UDY6icaJSCuWERC8ZCcvEA4NixLF8pz1nsBHvYm74EjXpRvJLifG29s8AgA9YENm7tWFmSjCG",
  "key29": "3Ve7EyW27ckRSmzZf52Md1dcCgKAxC4CWwYGiE41GrYquWFFWaU4sf4iJ6vN2m8E7trfkzaZkybRnrxtX9VgQFbM",
  "key30": "3sBmCgGDfdaQL6VLpj3jsGDGduu5P2uXxaeLabhFbvMnBet1Yh2dvLian4C6tJYvt4xhCJsyg4CD8paypoWVfYuB",
  "key31": "24EruYPAZZbJ5tstgYSdQXVRhax15az1nvP9rPjJa67HytKDn6fRg57RVhD6sznxWrAjR3Yz5ne5rXEvFqttyCmH",
  "key32": "2EYDBonMYkYSsHNbzyDdj9cXS1geieM78swtsmmfP1VyKPhp4PaAFvKFZrVyn8WMRY1crhdXvXs2yScKaiMAuEBc",
  "key33": "5uTxM3toiEfYppPHPiyeRDAeHLN62HjjVoV35KevhDAZ8h9tWrc6AfbPY2SkCrqJ6AkKHXQQe4iJSb156b3ZD1mi",
  "key34": "5B52L4vQTTyF3EWhy7nFudvBhjRrgyVbvrRKHkCV6Uq6CgDHEtTQs9BMDtpaS8HQRZBrVwE6qRivbDMjB5keyh5x",
  "key35": "pXbsWMCuacAcJTs6VeeLoG1E2Qr7aTJfAM3mcmGEpNL3v3XKmK4ZTfz2p4NF1P1mbfwqe3btqQmmuXwzjA6gRLM",
  "key36": "2x7bzepAhKRuhBXm2QwzScrtKPAJPVGF36ZSBES9VE8z2qXjsC6iLuU5wLHbEGSuUfHmDybk4ayXrTygJbbW1n9k",
  "key37": "2KCKHPD3Hrma1Ff2ruV8PQi5Yc8MBS8iPKZxK7bji2RJLvtnRC8kuBs9WLMWN9Ry3WhVy41XLMbkcG5cerE8gCib",
  "key38": "4ZxVVDkWrU7yHrJou7Y8t6E6tfHZ6UNPR6RFKVENKy7fDSS7WTBcudRMkxbDdw1QCL5iusPAVRUNreX1Vo17U3PH",
  "key39": "5ALTnU7DrA5X1HHqhj9TfXnZSwa84NfE7t743Mz8F9fZwud3YMfcg83ntMD2SXSanS7rVa1gHxxz7sShS6ToCgpS",
  "key40": "4d7DUPb5FbjQb5nkZmhwosyd22TFYWKQX3ahCrGQ2NA6crzDfUpoZUt27rKFiAYjhQiEX966sXTWyFYN6HjZ7ZgH",
  "key41": "2tn7JKsQnY3nd6e6smE7i47qfpdoQWGwNAeNYrVJFjgjp82JQVpfsyZnAkkZHaGze4pygWbWyh9YCrsEx5EungP4",
  "key42": "DGhjaWWuVkJPeihbYMgq9ZvrFt2SjxbicfjkNjmyzPvP4sd6LYMxwCnBTGQXVFWd3B8WxSzmHPborJhEGbrX7Bt",
  "key43": "44c2bTcp9VDNs3A5dcvBPd45L9oPiDtQJAjkews1qTHgk1dS57ADu4ENq6fJGuLMN9hyuBTCdB7mcDuHSD5U9F4Z",
  "key44": "3d71Ciqs6vkxg2TmhwTdb7E2j5W8VXGKTagJvdDfxndf6saY8D9bJi4YBgjF6ksmmy2khN54VjcyGVDtTtjkTDHe",
  "key45": "35EFkA7UJ6xQXQE582pLgSMXM7ubzG82oAr8PkGTyq7qwYH7JqEC92f86JoPjZCHxSytU8CwNHxrx2eGTQVH5mWk",
  "key46": "2tc8i9scHmVRA76w9XfdvN47C594qGMfLoq968AZkT8wkhuAKtoENcY251xvYML9btYtp8vQkJKA6DH62Y5F7cno"
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
