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
    "3YhyuzsEgLuLGq8pL2PBXste82SWHvtaB49ynbjtHvy2LcbUA93Kw2ZkW3W5V7i9WSfVMpRyQWitBh22tZQQLTZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXAM6PWkQcxNcQbEuToxErYWryap8mt1muycwRhh9AY12hspZfAr2UfSUZYEvnr7Vfob2nFeCiXpnsmh3S5WRUN",
  "key1": "BHWhvfof9SJjZ85yBHiDEwBdywzF1UNaRN4SAwfQHXK97xHS9N2R1LuFzyr3CDFJwRCBKgt7U8KjFxuo4zfmnbU",
  "key2": "4QnfXSG314FN74TPUSdDim5RMmHc176kPSfRcA3Cv9A1LLb59DqKttxjcv5MaZwueSZQUwrs2nFULcutVdryf1Wi",
  "key3": "64pxjmowhmC2W1JQPMjgviQ8r4ekFso9n3S4dhcPWKo2X2bnCxpnznSJwCMx1wSGs48gjE6EGpEUmzZkEvQxKkvJ",
  "key4": "3pnBr7MfxWhaJULdodUz5h997rmwtbQQiLbJawsjGbiFUcJExAkKVwa9r98B1tEhcGwA63Kfo5L1MRHtDuKgUV5k",
  "key5": "4HhvhASEVWTyXNJKKU6ArEiKs9UV9Qg6vHNNGsFgh7AY8EXSH5qAMLpNX22ArecEjUEqeovESdXWKqAujtVhi4Be",
  "key6": "434gxYFvmTwyz3g1MSSZP3funQngRWFbuS1EVJBtqTSLErVpJQpcmpGPpew2jt9s6MPf8nibx3YRskFXo3bwYsGK",
  "key7": "4RVf7KQB54JvnDDcBG9ZTdFeqjNDKcgGtoKVJZ2QmesQUWvojtD4QUv4KbCMWrps7NebJQFvnPkV2RJzE4N9DNkk",
  "key8": "DVz1MSW1BHq4C6iu9S8XakzHmymvmK1jEY5oaiHEzQe5G9DXyUSTguyFg6ncvDHxhenZscprd9se9WrXKLrL4P6",
  "key9": "5PpWi5sZZsPWkSJctsyEbU77AttaYPGWgLPHWceJCRJkT7DQXtQtWfF8D2NsTLeh7T3jUuSQD5bqR9cabTaXzgnT",
  "key10": "3vtEAfzbkDbDmKpdkGfnoN3F1kYu6FFXdYwwTnCg6d9FJ8e9Qna7UKqBjNxfXS1zmKNTMrwKCR5r2g3ZT5Z7eKeg",
  "key11": "58PLSep73W9gKNMovgyCkg3sLKJgvzAoPpJvEDjdKenHiDpGWeJ9gnoKcCnkaQc6HteWirEqCnPmRduzhrXbgBcn",
  "key12": "496sDWPSGzXMj2UvtZwNoT6wNuQJ5UFKtFfYBXdVrV8bZYcyKGoVo8pQLRLzUg6uA8JztmJpNCBPELP5gRDYNnBt",
  "key13": "2vMxKB4Ly8YjUoUK6Uf3hBr6sbfCsZVCKjaWjK2hfJXiQqa8uzWzfxHmvV5Xx14EfW5e5g39AsJK3kGiiSf54d56",
  "key14": "5B8mpXExhj3yUmS6TR6dXMka26173RaKJUcL9MymQsh5huXnsi7M1adwH6v7bb7p94U3jFhEfRAin3UK1CuHeqNt",
  "key15": "XPMhPjyxeFUjNEvK9rTFdtJMooEaxoPExd89wUYPwSaGeg627XiQJm9e7QZgGpWYBsyZMovbfHNqGcRuSwxAzJH",
  "key16": "5fcA3y5uMGscRRTw4A57FQAMB66noLT21YuvNz8K8JRs4k3tgJM9zzUcqE5ENAEMT8yKszUcgTv2cSHTX7FwU4k",
  "key17": "5jP6ybjePC3RVFPC3SHx4AzQP3mQ9LUt9rbnT7qWpvLtMKz4MgqRnMdFaB4T3Ch5wuyGEkeHfxv6sGq33EQUzjEc",
  "key18": "3WU2zn1KpXHcgFZeE7LP27wdXsArxVqxS1C6rmEHjDH4oxBpwnz9oe7JYNepDavMt6TibfPPv5Gsw9WMWWTcqTbr",
  "key19": "3hSCZC2V6RoHdX1GCrjChVhtB5uyQ1VhjrHqxDybUvRJuheJseHgsUmuCUuToQryfRkEXm8mZ1mQq9UDAquHthNS",
  "key20": "4ZJFrtds9NL5nxCboL6P2yXCQfWYFn9x1cjvYw1PpsDMKcWYJjFQzTV3GHYvZ3PfGnT8Hbt3udLEeMJ6mwdFs99b",
  "key21": "4gtoqoWKYNkvZBbVMnmfdsFiyfUqfDYTDaa4HsJ1oTkcEPzYfBNnTPFLiWNsGbdQyXiJZijGshwWYu6D2HMEZaaq",
  "key22": "UyKUGD9KCei1vc4gTbS4izFXaL8swoa97frt5U7HVdEJax8SjJaKCTnRRXZYqzpH3jWxBMtE9czbaLozBLa3k2U",
  "key23": "7xq9gB3KkjjGotQQ91EGVeTkEc787ckfcN1Ff25yrakJaYKL7vfQdELTJLaM5zGZ8xB2oCgaESoVLAKkKwavUU9",
  "key24": "4WZYozoRQwDwPDmTcRZv7ZsPTE5SNQe2CGd2nJjapryC81mPorCFDhZ2QAkn4zJ5hZwEsYXSRsQ4DK4f9N5wqkVY",
  "key25": "5n7GeWZqApr3xMXciuNhdVZkyfAadxUDAu6C9LsV8A3pSqjR23gSPwkvUCH62bah37RhpD6vjvt1Z9L8zfmkvMd2",
  "key26": "3RPRjvJSQWnyHa9Lw1QXpJZMHuxXGg5A4wrdsppkUSwUen5RbHD6LcY2iajKZT1AF9hAyUsQu27fNzs8iaJoE6Z",
  "key27": "37PfcV8e3X8nJpZsHfhwLHaLWW6fb8ucLEFQ8SJdbX1nrE7ab8n3UhhW8crSb5WZGP9ywh8x7pNLdTdtZVMgEGFV",
  "key28": "2mVxkqsReBYi779aCaZVxetAXYQtPQKS8SML7b6rps3SEoxAnHxQcPPCQvNzDsCbcmgJnMgTLT16iBQz5SBbzSCJ",
  "key29": "5horXgtucV6fqiGt7mRmzBJLWFFiPwu64RMkXpVsg2PkTSfsBnghDe2RSFKamR2cS43LV3pHpjPFjNdfnyctYv6Z",
  "key30": "4AfRHZqDwRU9eVb4xs6qf9pF6Qq6iqQEwgVaTMNkwbMB8RH6CghA3A7GqgqQo7tWMA8V9DP2KBT82d5eoF2jFFUC",
  "key31": "29qGYA9BKVS6AUVopNdxysUNAGwFVnaBYSS4DY5Y8fQuaGKC4F7k2QVY84kqHoALRT2sVsK5S4yk9EU8Htt7RDrF",
  "key32": "4oR5sNyjxAPc8BM59NiN394USDkumJwxfUzkC2Np6ELptZ7EMVqeMEdZJRAj2Kc6k5tEHB2ZQWcyFvcEBdsy9gTE",
  "key33": "5AsXxsw5Jz2RUY5XfTjjp2oGLrLymRehqtmCR6FHfw4J68PT22JdAfTvcad3QfALEYL1hByrE4ujoqs2XQMgnV9w",
  "key34": "2fSuYn6yfBGc1uTo1xDYXe9ko1pE45RMYRKMThk5VQSAaxAeGydcgutYXKZGSkk5eDqdtGGJtoFcr7nYCMbUeCah",
  "key35": "5yTZjPwQm3Z1G2X38L6B9vKzjWxY6fvoyZhLyQ2RZKrQ7GaN8z4Cc5vHBuATkyZw2m5UAGGhcpociQvUdbYFSdB3",
  "key36": "3iVXWGaMLPRsfFVgwd5waRPn7PG8ade4TDHLgYtdUPL9NmQuTWbVNMHNoQ8HMCWEZptkDjfpiSRx9vfQxLxx4gMV",
  "key37": "59VxJ18U5NvTX2NexjZHZSSyXLBGvpJP7KtC9kF7yK2dH91a791Hpc8nyQ6MwqVEfJJpmcmYNKQAXWMJWqcXYaa4",
  "key38": "4X1rbGQzj7VLansngc61HFDJJXQUrTTZPh4CS82b5KFraDeWAyAVurnX7YyNSKTcY2TAcirFLJfb4rFBbAFAP5vv",
  "key39": "2XMe37x1BgD17riooCPLXEXKXt8XjFZGUUi4v328WaD2NTVWqbJT93fDNq5GEd88qp66LJsNYVhSdNcdJAeDBtLR",
  "key40": "2ySG3f81T9nN7apfCwg5VNeyiPsM18tD7o4eD11AFTPVMmidT3XFcsgw7bPso53miC1a7tfjvz4tLkVEguxtWTpd",
  "key41": "3CF1sdLHhCrg3F95BzMjteh8U3rEZk94KhSuyrjhxZYg7by5wkBnCtE3vFtdzaJ9ZCDP2N5BnHtWG7Ww21h1x7kg",
  "key42": "2P8gupCqd9VwGWUPqfy9U6pu7cAvSg58KXyAkhezAuz2APGt7f8tzcAuowSsxmUhTDig5f1p1ZK38bDwAVMYg8Qj",
  "key43": "yMXZyg5SgQw2T9MQup9Qrh2sqQHwNjzHgA9rZZLuNmL765SWkz5b3VGg9YAvRgu1oR1UpUL3SFcmdtgy3Vhiedc",
  "key44": "5A6HmXbFvc8RmHkDLhSwKN6kjMfbP11puRY5WnL5evaff8fjPxnV9BEFXZVDe5Ct9uMj7Qb9N4MnMa4Hi6buQaxB",
  "key45": "4fbYjzy85KUaAG98FXh6GNFFfN6Qmc5oJkDSd3xeuqkAVokwQcg4YiE6XhBBY43HPotom4EWepkZfC8ZnpsdzC8U",
  "key46": "4rE9GCJUoG4h4b5U3JvHT4CowmKaqnX6yDaXpuvKLVPFvKkygSaEDWDoMP826H4fRBxYkBVB4U9fjRCk6R3UKPrz",
  "key47": "4TD3HnFiJX5Cdrxeqee2JaW2vHcGdNxmfwAV32KNNqZedTjKrg72ShrnSy8y3SUc1NhfkD4QM7A9gAt39sQPFGt5",
  "key48": "3d4VQnUam9tqq7GMuF2TpbGMY8duFNaspKQAoCzeQ9fbzGinD9LSPDFEVfyUjznMXB6EphTAUNhvcoVcKxs9V74T",
  "key49": "4mwq19UAJoh1Bh6SKN8hmK6BuSCgS4QfFawTP2fq9ZkZefTNKVrSP88JPvyMee45wALQVJELhns3fzp2sm6cUbK5"
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
