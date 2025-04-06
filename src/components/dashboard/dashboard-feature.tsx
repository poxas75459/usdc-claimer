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
    "2v4nr54A62kuoNpB873nRKzA1bcbiwV2TUpqU26AmYPMSdToiEGvqztt6CYYuDTTxYgzgXb5rs3uHAeHkuscL27V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iSvtabKJWYR353F4CTfvQL3FShZMNF4x8NoMmUC5HHct68tHJGCg8HRWNbjmxPbbXZ5oXZhQUtmzSBe4yAt2DJP",
  "key1": "4hz6A16i1SsASAb9CkcUJPAsPffmJZYaTbLyZpFSTy6SNcRicbgrqUixqGuXW1441KN2q3cce81qykW4TFfhhjar",
  "key2": "3nnMg4ke2cUrrv2oufQw6hkGEKopBvkWoB1cX5AkdpGviyBmc46CtifPhgXSfnadoBw9azM3aqY357AKwzUUVaCB",
  "key3": "9XH7CRcDzLBP43wjjsviE7Kvg9GAKkErUvPyPJorq64jJ5M6sj2TdRmCZX4agkqi2S6ubPFaCa4u8oLxz4EdsKN",
  "key4": "3CeMWKY9nWPuygbjLmCiLTGsnuFCa2uSu4AU4gruv6yieFURfx55mKy7EqTyFdfnxq32X99AGDZMm2RAiHuSUeHu",
  "key5": "3Jpz3kYD72oS5KBDhQab1b9nay3niuQuxgAWYkzbLAVdEULy1iVMMdmSExhj4FkewDssYVm9QXiqSgjDfHfRXvis",
  "key6": "8bzyFVJPGftrgGLwDS1G93rShk9PbjiAKGSs2dSvYG7eqznwHfGeMNZPD8KSNV5y6jbnAuY1qmhuB8MgTZzQcZe",
  "key7": "5ZR14hR1Ew2bgeCynrNNPdB6uL45i7NFiwYgvas2oafZngQU9BBGozFrnN6A8VvJKok7fswKXoLds89uqUKJ9uZu",
  "key8": "2kSfR5tuB3vvXz3Ai7PGgaxNcY51GwwjsHC889tSaQc8DXJDfMdFKeQtgakWYaVKoBE1xkVPUNqrJXVBfsYptmig",
  "key9": "38YBX7LasGtKjWVZ9yWfgn1gmi5bWscbHS3oy9oqFA1pnGYQy9JdCVJqgFqZkEa37PFUJ8pepWzv1EjkFMNTtie4",
  "key10": "2ULbaT2Y3x6zH5X3yN7Qbp4eb1mME1aBEnJEqWh7wX8o6xM3P7TYvPvnMCjxFuHrR2X1ReY25UmprBJpmbSsP6Kt",
  "key11": "4CreEsanFh8sz5aZw4nEavQShv64ojzZ2PkbBbZCzzgTGYGnPnRQDubnmNR2vjFdwSCciUvessZebKdQEUrEfZ14",
  "key12": "5zPgh7nEqFMsvJKzKBdHfRewX6hbtCmmR12vuLtVXpTjXCA41MoWeLAXhQ46GbcHW6GrojtS7UBC4z1jvZxPAYv6",
  "key13": "5hZsqPAqUyNkcPLiH67F7iFWrMLfHgiiQb1cvGNdD2CqyNG7RxeV1s96LBN7FnLEBsKqZzYLoeDgAqKJ2LHZURtJ",
  "key14": "4TaQJbLChVun3yAKjQTz7pHCDDf6W3eT9T2dXd2okVWCrTJh8HQpgfYnAb5SBhYJz7t5inpfSAS8LFCvUzmSfDNU",
  "key15": "2ef53U6oKS1UAyB6N16ctCbDqYjst1hTRWsYcjXScornNxYGhGGuWoUooeuFDXCAQVziGVqkDiwGXVdbKLXXrUcV",
  "key16": "3S4iogTr4j2vr4f7B4BUaQhrj65JMc8NaZwHyiaZSYKRuSpxWjKWjUSpLxo9nUbqYFYFMBhkfbLeh5LD1EfTMrMh",
  "key17": "2SuUutz4SoDNjudRaJenfkQCxmoh8v1oJHu7SG44yWwa7fiG8NEsnrHmfQgfKy37ETn6Az2P4hcXzZsuJFZp957s",
  "key18": "3tGTYc2Y8rDKSXPdWL21grJAMJ5AxnSyqfx5PdmWz13aRGKSNjBCuXcD8k5dap4r3VpmFmBx4hyXLqoBUAhbj2Lc",
  "key19": "4z7QngH5SQ6rV2h1mkXXhBUuR2UzfgsnkGpUN3atd3puzt3DZ9nY14cNcuaAdCiK3sMrGLgSkk4fJZMBAebQoBZN",
  "key20": "2hsWqLtXZcXKBxPXsNqAgCWzgyNzQxjki74b3hXeSwC5MDKQqUymF9JxcoEvQQcbyocf1NusF8ibtEtjhDqSZoz6",
  "key21": "4wT9h2QU8oWFbP5f9wYCx1Mc61qQaUKXPzY6jqFbnr6PcHVK1DG7YpK1jjUw79imNMpLkV1Q1ZxUxwfPVY7T8S7i",
  "key22": "4HdBVfhooyGwTMeBgHp8hV3zwN2arsANhtJ63fSxeh1MbW22EEz9dkLxftYp912oTuG5Xz5LBZtXTUx7PprqiBvQ",
  "key23": "3ZRrWCx7x4ZdwPU6qJhDbu8BVSDxqSRLjArxVLGkLv9qJzaqbDHgmBXJEDh9pdK9eE5FvvyxF7xS5kkZheAFv9AY",
  "key24": "4j8PTavYGfxjbcKnDGpVnVocPo4HYoNguWFHPFrTxjjtusAgCmm7FAnWzYxKV77BRw9XbBGPai6dLvGbvpyxp1Sr",
  "key25": "5DozuNsCz5cJ82gQScDzAXCd5h4taAm44xy2NE5wdFU8RFRAUWHytfLvs34Jf5A3wYv1pkidvqPZ8trUAjSJWre4",
  "key26": "4mfhNcHuXGoDkeew42XeFjzbqVADWdfVkp79yaqUPf6dtAN9YcQXVSZaJ2GVZxy21aP5GCTbbje4qCdQjL1UU8hU",
  "key27": "5VLoViZZzqMCztyKddS3d9wQAnyE3tvmD43bjfvJoMa1on1W9c56N9hAcGNDt9oavZSjnnp1iGkJLdvMashsNfCK",
  "key28": "4AbwwPxwGEu1xEqrNDQCGWpHFRDVD2VBw6rZyMwLPu6rHrzk5t28hsvd3zLqT8NRdnMubuXvs4Cyw1X4ZtThJkgh",
  "key29": "3cTQDy3UQjWA3dc3LupyvVg7uHtgL2pFDMEvowvmR2qPogfKQfaRweY8rbSKwkk4FXn5DEv6epD2ghfWxKgnJJPL",
  "key30": "3w4nmRATYjJDHnyhEMRRGGyQVDd2vYrmM1nhN9vV9vzpkXgyvU9Uh98LJEYTAbLAhNYdQiHM5EKy9Y7Re4TfjZvP",
  "key31": "5mesGfe6537pRs2X8mdQHbv6uu4NyZb8kuXN692M9XtKdjcHe3gpJczWqGUSzTFoMHPpsQywo1exPvK2ZgyJWT1Y",
  "key32": "xGQ4gf4LbF7xy4jubZd5pAjJiqm9CMYeqkjwG9xexb3FGjGBjgus1uKkYm8t1vgDBQiVvfzPFeZDcBBvhbgsJV2",
  "key33": "vj2dLmDr7LFKdz2UNyr6dCAe1wyQ8jCzpP2rBSe6QgtZ4CFz3b1ik2pGxUVwrjBNAuFbFWcsFyR1UbJTQaUR4jm",
  "key34": "2EEwuKnQyGZ39hGt6NCMGSrHgs4kekvjo9m63c5djvY4VqtViJwdc58iFhEwuhUFbRXvDZuFWy5Ez5BuJVbXtAqc",
  "key35": "4gRxPDwGxtbyPqJxvaQo1oF421FQ62oLjtV9JcGF3FMWui2XF9XJzX7vgaA5AguDHkDTpknzw9TmuyXTyDz9xNeJ"
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
