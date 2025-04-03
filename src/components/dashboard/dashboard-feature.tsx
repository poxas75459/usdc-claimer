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
    "a1YUQXBgcR4nHpB2sAMBuaq4P5JuAoCg2eVL3GTUx8UYkYHih4RMXM43dPgqhrvafMwcqUkVJCdyGkkPAN4j5fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAoEcDb8P85KJLk4nfseo456Z1WcnQ9fZz82UnT3QNH8tmfE9aNVgyry7BQ7PQocS9Ymi9uBDa5UmiDjiBjGym1",
  "key1": "2sgQW36GAcNAA2124NLNR6cMnGJi89Jeg9SHo1WjZCYvzMoFBMueiAdiSntL28CyHF2xjmcrmkzg8MD6zdFgsHEU",
  "key2": "5ksr5HYUzJRyPnqqT4cDqerts5kZZKe6hKvUpKzE7zocoYfLbhaAerhmEe3TEm6ZJqbCpiE9j26SsVBVH6urCz5V",
  "key3": "5nwnP1Rd6cDY1YbqXNrgnzJd3y9PeHTCaDMqcmbaaoTn6Pq3Zea3pqNvbqmC5orHqv6gTUTKsK5XLZRPwqQGJoKk",
  "key4": "4ehFkzEemTqo5TySR97BRgNNvRua7BXzocqv4NA7PmdkFinmbzLXEopXyANty5iG4fHd3VapoURL1BiKBjC3PbFb",
  "key5": "LhkmwgxNtRJaAY2oHLECERMnzYUutTn7TGvhuqqU2Ftehkxi4dpN37c8wK5MryQPCN18UqKHPWSr1HkFaZtbDTh",
  "key6": "TBgYhUd9U3HCRST6XogkY2vj2KboJf33kbFoMzMDXsZ475MBd9KvNLxYfogq23ytqnKDQs4DsvNr9wDj7D2HDkn",
  "key7": "4xViZuXCeuRT8YsF82XkguftjLdAKecFMYjFbtgpYDny7DLmviqu3oJ1pet7XKovMdm3mAwDE7uL4XS34QRATWSt",
  "key8": "YkSpykd5zyzaL1cMxJguEJ89WX3SFs9c6eK4GRK7BpzoiJwbqoKGQz4fmwuzubAUebHaZjzhrtoMJZDAXA9UyYw",
  "key9": "5qsVRNRQk9inhgNc9WUGef5XS5f63z9vN9ik1bDmYFiwggeriYNqYoCKMjtSJQ4t2f8J1de5ypepEQPB75d5mZdB",
  "key10": "2BLRGbKJLDjfkJDG5cpyic4uyMaxUmLheTEt2acQt7UbHonBbLGTiicVGMrKGReHrgLqAaiVQLZi9kJQqDhdrKWq",
  "key11": "5WGETMBzePQoiBWGLobGEXqpneCeigrLte46s9KthbtAzpmQtBUXetuiRVPyC6gZY5Umg9Zz46GK46NBm49TL6UQ",
  "key12": "4hTSkUFpL76vwQFsvEyhqWuD3Vqnregtia1vMMv2Sy2uTr4j95cgiK7ymyrypWfW1eLmn1QdG2tcRY59WoDCEywZ",
  "key13": "AMVYkcn43UcPHwY4FfMnXV111MubP5s6yVZZZDogHJGSAj8uuJqn2k8VxLZU2ejdmZtxMBUdiviKwpzDvVZEX3S",
  "key14": "5UxUxCjo18TsE7QocXYYavTmvSVgiVz8Y2TagNpDeH6UxoSX8g4SBc7tDW4TgfDed7BURD7cCdyhFTKcbeaQzQZE",
  "key15": "27N3dLhLkFTE1s9UhYq9yt1TStTDas1EVypHSKnE4kMwi2asfr1USVUJxw2Vt3Vv3jc7p2zUVb98A3cSFCmGbM7m",
  "key16": "5dewr1QTZuUAsm5URqW6nVKCeJP9Gpf3zTwuc6wCfcNjV3vAhb5j4fk254d76zQgtxr65aARzANfRbfnyNE232Ed",
  "key17": "5t4SmdN5tiH4zvJS4hVtmqNFH3r5q3EpoBJbFHrjNEJkrnWRCEQvnYZi92XG5aSREfyCNH1A4B7t5GTQKpY3muun",
  "key18": "4bemPj1NRfePFoN9WcSLfVHZtppTVf2YMn6H3TsiiXmnqwATDiXDuh6uSs5z7eSYNpmRaw1JrC4UkgYiRnwnGq6c",
  "key19": "43H1H8stn2QLoSKaJKH9wvmsyTVMJ6pnYpXRGTUYJ6HrshHdV6tMJeUAEn6Zw8kSu7i3vMaTZSRgdDduHZ9DkLWo",
  "key20": "23Szn77Fs3rWaVcctNjXKaUwvdamxgiLCQm41QQ6GkxDY1YTcUeUaTuRToi1UsxnFSwXPf1MNMwTLHfEDLpJg4jz",
  "key21": "2rh8khD7yvtq3sg98rXcThJTFGMEW2HAiiX5wyg8FKRTcaWhZtkcFHhMUnLmRTDzW312YABuJJzQTP9GYDcQxRY",
  "key22": "3A7UF9TDqtLvjmQX6CywEKnoTyDrtoGcqbVyFPy5qfxDuu36ix9sY2vX7Bbv6KA1QKT54EC3s3NkZG5iqCAY8QzH",
  "key23": "2aCGggqfD2wJWkcW1u5cmGd32XAjxeEt6s7485icBkd2zZ4L6VfGEe9R1xZfxMbd2oj7Qweeja1S581wvCHMZmdi",
  "key24": "5csoGWgZ3KGHemaBpXc8KuyMq9YEzS6a93K7bjKzTohorytTtcvEX68S688MbEhS7Bi7uYHCXYdkP4Yo93AmtsmT",
  "key25": "3b6uwPDyifXpTvHi9qXmBy3RF5E2eUxh14ve6fW2UoNRsMTRUHDJ8BnW7w3qv5r5cVh3YECjif59gYKG7VVhPWsG",
  "key26": "ofDdcUJD1ewsiLbBb47nkhyaHyGtgbsh5TpchiUrSKCnfg2nfbjkwdkdjCsvSVUgg5FvrQSJPeYi36LTaXhNbGg",
  "key27": "txjEJfzPPTmcmGveQQvRMN2UER7DXVVriXQwRt7MtHmXBAnoEJkqzsdgTagFPnKQSm6BggsstDPofVY5cs89tVJ",
  "key28": "2MiQuMZUqiU6pMXDps97Njuqteq4bgsANMicCDURTMgoP2tmM6S7DSgoNKXVvTmCPjEBZy7qUtM531eY1PVTuyQe",
  "key29": "dBmmXxABoJnE9FzXYzGxdFoc3DsDVvT8Sh7Dpqsy4ai7JT1EENqkkMW5DjowKFiEfcdBxwmpqmvNsDLXFoh9CAc",
  "key30": "37sHAZZa5He7Kbz57QyCTwy6hoJ1dqHesBLTvT7UZPiFiqMtaRANW2x1etcEUVgPnS2fncsouaEegFaS8pMRUMa",
  "key31": "5HiVubp58ZumB8ENd6tv9wZxgc6By71usZqT6SqSggHkWqcJVjKBfpq9Qm1m4BgRDK4nEeYULfyjgQRjGNiheWtc",
  "key32": "2m6rjFaVw6AM1Ky9Q1zrQm9dBAdnmfgsMBGSR3day9uYahom3YibkSfaatFNLtgaCo2D3jYTVkj1CTqNMMLDiH7L",
  "key33": "3UySAM94R8sBDuJ72NYkTwx7MLrUQVyKtcJK1LVXoybY4YSxYXLpsU6YRqrPkj7cVt2U2XAjjoppYnbTtEPV1Wf6",
  "key34": "2pJ4P3ECfcV9NcmReibGpHinhacyeeP7xc3yMCFFnXZdjbBnA4e6RFjfQX4xfUwaD4Z2oQwuV5wBtkWxcWHz8Nk7",
  "key35": "2Qdb1ftRjX19eePziwwGTzP4uZS67aKS3zLfgpG4x6Fvcs8cavzCCLJDGQjw9ZnCM5TNQaqvRh4R5XLBV71KN1gB",
  "key36": "5GkSvupXCekKdhfoNYAjmZj3TerhFBg7mbGq8UbBQtjaL262RvXtC7gJRfNBYG4jBf5abfV1YBhQfCaxcPnjcimP",
  "key37": "GFMGn3BB2STqD7hWPCXC4Cv6W4JG3TKh8ofmKRRd5ppJXxbeARotkKGGMyo9zTXn3wBBhnofmYTLwpsNvxT3d1i",
  "key38": "C1yPhHCGdNZYq8f6JoRdh1hU1YLB9K8o5ww8gwRvfrW3Wo9iNJnxYjputgndMgNLtJhoDTHnm3uqC1ss83YtvqF",
  "key39": "46XXtfAVUZTvGvY8VZben2ro6Fc3axsHfBw9o6PQF8Bu5BxQ1ZhZZmfpo7HZxbzHtFPhEUxgv6afGc2U5XpDxRAs",
  "key40": "5avARTuYJFX8VfQWGcnRzYfSEjVZQwapwhUfhhwS3WWoUTkJHHC5tgMZWZoMhz2MhHcyMz88Gzr2ticKwaLFnUKq"
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
