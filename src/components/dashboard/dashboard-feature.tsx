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
    "LyEfs2Da3T1YMNcCMmmS3YcYgkyghmXLhvKdCVPfoWRg7dJc6Cx9j36KSUM15PsffSs2EQdhEFdJtb5TnGamV5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMoMt5pdg3VptAVnsMPUFAYknsshcUfrh2gNn6oAvD64bDtL7zGNsqMe6N7nJgnEs4YFhZE5wg5ZfQUouRnUaRu",
  "key1": "4FAQ8dMmTh9sdcXLCexYmtkj5a5pbDoR7XGgfU8Bp8NVqmXVVjMYVeY43DKvD27xE2bXfWB9GFQJafSCcLjxxGHf",
  "key2": "62nkTZofKGzgYynMERV4d3zRefxGLK1P8FdFcH2SHT9yPQycikfqEjiqUuqbBDPMRzJnU77CFz9GdX7hsh9uNVoT",
  "key3": "2CaGmHGavezpR2JLf6zewwT7iyD2enS3eJFSx3F94Wny8jT2MbtpqBqShaD8ysAJi6q1N1JzD21Xu2qoxBZxfdGB",
  "key4": "sQ8GfDKiEs4Sasz7CUgP7ELE11vkvqZcxR6J1PpTYKqYGEfaZm34oZch5U1dtDCs5Zmh4uE5CToBUF9yS3GTpog",
  "key5": "cwT8k6XZK8nr68Vu2VgzRroQwSJe8h34jev8dR1Y7ZYyLeytbSEFSV9fwybSKSAfPBGYD6FDXDLjRWmK5sNF8im",
  "key6": "5w3feE3NzG2BwkzFy1JLz59jU2d9PjRjhFrGjxrtGSkDJD2Fq76cQ1QswN67esTjr2ZeKGzfx8L9zJchw7Urnf5i",
  "key7": "5u7UJFJwVjpmrKnY1g4fxL4CzpZV4dM9TfkAkX1XDBdypvG1Q5G7AJKNKDjeMYuMDpitKRyjWPPZbikPoybwc6b1",
  "key8": "5Cvh7Dk7uUyWBWV8ydnjunbEb3iViCCPD15S8Wur38EcHTwru2X3i6EabS8XqsgvoT4fXpAjcwiE9PhebmDQT6LF",
  "key9": "3hfbre8rQoSmRWiUS2rt4v4xLwKiqSYMdaFyhmm6zwx1moixNzSpEMw3SKPnMEx2L7StjE4pmncVJRf7z3cPX4bF",
  "key10": "5EdYGEaojaY4oWRtd7c785rDxBjjFacXdYXEaEFXbCtDGbGQibUXU5afisebn4t3Fj1YBCu7MxQj5arufDWrpznZ",
  "key11": "2oPJFjKR7asop9gJJAxwVAn6mkmb8pUR8uokkZ4wgutt3Msj28uqAb1LALYxDXneN9zVsk7nJ6AuNxsuh3Z4abto",
  "key12": "2Nm4PaqYyoD9hoazqHqTR9UuApQGzM4Ks6HBhHBS2Wq3tQK57cC2bTxhXXUaaKro5fwYQwyduejkZ6FafzSjtHLh",
  "key13": "3N8RU4fszEe7QdQuaGSWeLyvCjqYJK6LsMVf8sHYzvaMVqqPMfuizHyWVtDQkbnHZT4ybzNxhvdj6GpPtpPbJHBq",
  "key14": "ucsaRmFezfazV1JUZa8oWwkhrqC8vEnJSFB9sW7MWw63APGQmSU4TNo4tetUZkyqp1rHF4vqQVgvJs2JYuWfjtZ",
  "key15": "P19hGhnPubMgNaPD8BErfCE7AhrGiU1LeBgqKxz4Yf6KLnq4Uztn3jn9vWmhAKPwk9rLwnuDaBCwZi2WAWGYZqX",
  "key16": "rh9YrjPoKZoaGyJTm5FMGJCUShsYuLL6dwV8GKsXnAMMU4WwW9ykEyx5umRHzdoZGnS6d8mFbvK5GAUauNGANRB",
  "key17": "x2E1gpkXAfMFak83Wbd2RgfpcnmQ2SsHa4MhdxdoKGL5Yhm6siyJFHzNTD9fTiNXEfqc2bPqYb2V243MiKujDus",
  "key18": "LoUi88BX9hkqVwJeiyBkwtNgUSV9Zw3bnYf4wCJJfWxXyEE13gD2mam4q2eaAmtgydLmvtAjBJ9oMSkLFZb3yYz",
  "key19": "33m6JWWGt2DSw4n2hQDvtzb8K1X4Mh9jMseyP5mThU5NbNFBmJBPB2c6HLqQkt6Ky4neNfwFkQLNcwicAEKhjGSV",
  "key20": "5eo4BaGGNGoAcyFboxYJCwaYEnqGNkEp3PEKU35DLZHYtEABJVVLrsyF686im1zNtSNRg9vP47FY8NGQnZqaBdzY",
  "key21": "4rgN4VB5iFyUJK2baTabf8iz4Wvus8KrXRCgXGDyzZ4LqpdBzvY2B68v5k7tN4KqnjRqnwva7tZWnYmVLAR4RsvH",
  "key22": "xVDy69qiagMjbczJsgvfBSDm3KFNfMfk6PnZXC8R6L3cvFbH2o3vAkcfKBPtqaEaDcvMEPUs8JH1KWXsSkZMGFE",
  "key23": "42cWX1mfnbeLoJ8oY2mXtL1rtnRd8gMDJF2hnywz7iDmQmbKaAJ1QQx2nPfMkTzAk78LxiGgCVjALP1hBUUirHHv",
  "key24": "ifReMCb1PSayurESsQMJNGqsFxqvSSUERrjskeSchfVfh1981sDunBadsA535rHGankCquiNLef7B5UVvtDSDgs",
  "key25": "5EL9re46h75kFwFQSoGMdBhXuquNPP6jTohRzuHz3BYqfdzJBZnWFxxbHcvpCRd6xUgcoj1LvWLJ2jzEDTa5DBAS",
  "key26": "56MYoYXAEvBUTqwNqpRaRRA4aN91BifAD5zHRweTPHNzM9sbJNyuGp8p4Wvu9tQRAAauXGET68j2tCc8yZWkpJxZ",
  "key27": "4iqieRvPJdBxsS4Dsmf2MX3KKojAWVp3eVFZuqvCSjMekvC1ZhharyvDJHSt4vX7vt3snZNrBMPurxTiB3vqEpX",
  "key28": "3UHK73AHN8nUfYDZirXgNDoe6EWNCW81sMrRKsJLFwW9W8KiQodEnaXxRMv8XEWTMTdGefKkqm8Vyc6uLtQowSJs",
  "key29": "mmG26Rs9hPuNCFWtaupY4aVoWGspbWoPrBhpscqGTTPzULd3jufQTD1TDNbpcDgxa5zYg3VDN8rgDsVampfWMJ3",
  "key30": "2C3TreLuz5Xv7ARViSVtBot7cPGgMoeRou4gxxPG1qE3i4eQSJX9bgfr6a2xMLiuXSnEoJ4agGGV52wmxps6ZtXD",
  "key31": "5zGJ5sjFgaRy7JCdAXtdCs5k9MZWbMLVSwRq5dP2VMyNepcLqL4ns46idst43HXK5K3wZBUvfb5Gp1bSjpNqAfoE",
  "key32": "5WGz8YoUE8s4aPsDUsegxVUasdDzE3oahBcQXrKSnQp7uiSkHS9wR1XzgjKC3prg6wRFPrB6gWW9vg9dQnw5djXL",
  "key33": "21evFifQ7AZJqJkFVxNu3gjKjsto8FimcNKPX8oQ295HofkzCBfFJo1MaUxcxMd7YG295Fh2jRQ1J2sp5TrMDTtR",
  "key34": "255iLuyZdUAic54fHa1trqFpj3oRp7aHU28WCHCsvE5dnZoHBK4hNdDZ8sUTbdAS3KRuYaKeYi5EveDZD2EXFFPS",
  "key35": "2m3gD8jzcYG9ZQnE8xEuHvCL5sCaCUrrmi3w4UNU4kZTDdW9YfmhMRVBxKUhTLKS5ygGxgWcSwNP2ya8z1iB9krG",
  "key36": "4zaPRZqmx7TD6k94eYyFHz2iVNhpsFKt6e6rvQ6GMHN166bmvaaZmBiqdQGZFD6M6x7v36Cu3iLMcnf91etoc8gE",
  "key37": "fA2G8kzuyK395Asqd1CKsHh7pybCMdFnnPPeRtpc3hYbnao9vM65h3KUUkqnde4WXoTsGi7Rb4nY9jnx6MQeVAm",
  "key38": "2eoSr9krKnpugGNqqZj8gMjk2BZ5rsMEKBRoixJTxE3CX5hGFqdoGJeJieeBKjaw2ZVibv9ZTG4wbgLcrivP6RPb",
  "key39": "2UstHQUTUiQHDHCoiw8d7gxkrbYK9efAMgq7TNvpxKn3iBqNd2P8Feu2y9PMyEiKQ154CrTJ1EvQRQyiusa2zsSp",
  "key40": "578T413LdPXhZ6ADTyYrk7CRMUTNCKs4ATaiWjXvDWCqR1ZiyndXv2Hhyvkpz9QoY8SM7CeMJNpCqymnpRHtWSG9",
  "key41": "2Nrh5gmX1xKpDKbVq7MEyFMT1yhHeJQzEc1E5waSTTDuXAW152ZmbTBZeXkJM1jsYU8C1yffp5jBEiaugegDGqtG",
  "key42": "3qSVyzXt4KwPSgzr41MybeCPGzNn1fDnCQNJ9wUjJmDBvbE9Rn7RRXji67QCabEcM4L7zE9soAQjv6yyz5UpQMu4"
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
