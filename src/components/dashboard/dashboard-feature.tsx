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
    "SXutQgkLoqzWCTgc4xED52oJCMSiubRGUkZwMqg16Aq89JS5CFtHqKWTbCfiLVWjwjbywt44YC2ENX6JNGSJtwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ad4XK3Bn1BQJEGTWSvDRJH2Hif5WyX2ewQQpTKcZLcf9nD4fSbWMVrABkRAJXN6jUUvzKBYbkASj7sbEW3je2Js",
  "key1": "dTKbxBWz1GVyQPzfJQC99AYwrE8gsqQ2KH6hiEHBjHQgwTSFrSaasmkjCv7w9b77nqjFnbNdnrDSSeDep4dnKUg",
  "key2": "UVpuKXGnGxeff9KxSWc9X1g6m2PdmaA2C8mpzuszwLGNvWdWMvNmBLbscRZc51wL32yTmQurEfPKhP8uiXEBnpF",
  "key3": "4EFaVzQrCLZveQ4Ea4x1LmGgpArtjpD7JpEKvr7kZEmdqFNwVBKHawBFj5nwiHDJfr7o9ZuNRZ3gNiqV4Jbu56R2",
  "key4": "38zRSo4KX653rzBbzahgt4wpEvmacNudLadu6jSsZGSNfhp1DvxbvFBeDcu3GDwGczpgEhZt66CoAdXaBouycFiM",
  "key5": "4H5Ltx9VPhHfbnwxUwF9qfUwPCxBfvnNQCPdHRU38ziQw6zwJJkxcRWJnwNX4x16cdVu7yMzpT94Lnre9ZwKZtfQ",
  "key6": "K2eTdkWhyUbkpi3izRuKhiyDJptsKX9M5LQ5Wxq7uXo6ShYdnPUeDAE8rLL758n3Eg4XzEXMnJVAw4kbEr9Z8Fe",
  "key7": "4sbSBWjdL5Ftq4YPHc4LTr4MyJQAupKvMAuH1iuEecnptBGrprvs4PAM2jX7yAiJHpw7mzVC8mfv5HAYtuuf9xpQ",
  "key8": "4q67eLD1J9etHmaWuEexMCvVadpK1mDPf2pdjnmKPZko7qXK8z18vnYYnaC9TuCxwLYtkjar4roADZnj6GAyAzQf",
  "key9": "55w2wBoGX7tbC7FEcsRbdc8D6sk4CfSR1gVVbbzueTKS5XrpazsN57ewQLg4nTP8nMtH8mnf9Mg6D6vRJA2k9yUF",
  "key10": "3JK33t8rBrJsmMaUDAqBcayUfW4KE64sZ1iCoQY2tg1yubv7UFM3EymBMXauyNoG13yLSVgTfdaczECavauag1ZJ",
  "key11": "iWE3vgaQJuQhvQCbuf9HGo2hmCi267juS4F2srNzd1aeZDD5fnNPvW535uKDVUKQGzQFXqfMZ83DXaFd4JjZueC",
  "key12": "22EVrBJch9VTykd9mmkdKhor3PickfLhSQzcGUaipUjn8P8mojiPoa1ewh8DqLDEEKQD3oqEmpQ9Z7po9ZeqLX7X",
  "key13": "4RZVUYTGthAVVNC4JyWDUaTVJcZWdR2etaZmAvX77sXUZ3PPuFt9gZCRRxpXWofyrMU44UF74wYSzq4wdp4VMVMZ",
  "key14": "2Rvm3ZHVUvhYs6CzA629yNAW64xtebUFMPQfdXKxKpEV39JDy7Rw4ENx2Dr8omGzEsw67iVWNZeWKRNkQEC9YA4x",
  "key15": "3JR7xA5M38E8iEVjSdrwFVcNF1F6hTMJK5kPJTyfAVXcdnZyxNvvSRXGZxCnHzazbE1W8y4aFeHPL8QuWB2MWuch",
  "key16": "Y9esKnrCWFK1K7rLzDNuDyGU6J3DVBbd3M3WLT29VPFUCU9suUaZFqasSKQ6C4We5FiZN6bdP7Nx3QKWKFFfyko",
  "key17": "2tkjxxq7e4mzCXkF9PZpw7xA5hj7uCV8QqMtovYVjKxcoBPBxE5ntBscqt4FHrVX49KPnYVw2y4XoBMxJsLgYs7W",
  "key18": "5ZFimUEsfBXmpvSqkgRjeuSDmAn4Q75ieSDcsyghMQ6wEwjFutVQYY38wWH5bbhvRQ43xB8ucpSZ5TuocTY33kqW",
  "key19": "4vL6RM9btKAF6MHgkkwjmiXqBQdhTn98an9gYe5M4Pv6sTVcSLaq7g3KfbSvtDmGYXQ9tVByhx69NUT7XB9LdVWk",
  "key20": "2FKwVHVF59PZ8WKcia37aBQN5Zr7wNJW1SLeaSjww6niku6SboCajzbD4QQhWu6bshfdkkWXoZSFfgLboH3pcan9",
  "key21": "3eotWsojcRjWE9Vht9y8XtJR51g4RWP3oedJWKQyt8vbxJCDkNFsMfLofhsewoVETthvGoM9zMoVjM9v1f7Sqaac",
  "key22": "38vSYqunxWTDEYVPr3R7vtfV6UEA9XTzbGNdp72iJyTjasim9ahcFAh25dXgkoxVCTDYdNWHZhSq5SM6VEKUrSTw",
  "key23": "4hXgo2uJphjJGmWWdJRWYVq7ECkzfLpCRgMdT484r8CLFRm4uduCjt1qS1BqCnKBJpfXXgJEi2m2jPeoGFPDBLFn",
  "key24": "DuoeGs5wL8uRKCkdDhaLxiAn2CwFvaHVDJNYEa6956trKMnvt5F1c1RkqzfVU2BRs9Cn7wbW4drgxXhoikHPJLr",
  "key25": "37ZowDXUSryMnXAXb9vycNo8RrbC5uJXHL4Q5ot9g1PnfJrLP1pE31VwmvgKizSVaCRnnTHim8n39ASW33f3qxMa",
  "key26": "4VytqnTSvT29PQgma3zXqmBLtbzKktVBxHGceiGzfXtbGoZj7NcXuNqpW9vrurVzGDKLixWd7PS9NtNbRaC2hqsb",
  "key27": "3ws9gL83BeSnEPuKFC7pn11ucmS45DiRADCCnAc8ksCQShTU1ffifoEZbvhopnjgaKuaVkQX2M9nM1LoSBfQzxpZ",
  "key28": "5Qkc7F5gSpx269SY5bfUmnAsFNXRRQ4PJhgY8Yvu3itHJ1agZKyyRJoHAg5fNpYYyo4KPTAvUSsysbxsYKbGL9Pp",
  "key29": "2r2R71bE9u3BCjHoME4FGdMiWVH5veMruZpMPUVP83tFWWEiTh3TmgW4osfK83WugjDyPxejJtget9bTD2ooz7rD",
  "key30": "62unBhw5zcdUREZbw6efKuJtqXsR64we6gqC7pUuyjDEBUWQRUKn5GcofZ34ZaDKLZHYdcCQtuuvqvy9DwmNvc97",
  "key31": "5ajhgtYL94NzojADi93u197vsJWCXiTPUwhTJoboi9zESvLcajLKFB2y6PxhUsQdHCzdc9YjUbo5JMVePE9fdibP",
  "key32": "2aSSxomomF9hXUxCGCQCskmH3XLNRj3TJt4w6kMj9aNbjGcDq94cTJRape8cWq36822fg23dvZovnkgXPViqh8se",
  "key33": "4QVsKGAC5wSqAvx9gUaK3VwJRZtugmZBZSSNWLMW4R1i3QZNKUuMDF2ispiQxx4R9ujCaDxZ87vyWQxwFYgpBUvU",
  "key34": "2ViEZNqgxFp7MuMbFtUAFJnuMxsTpBqR8Lu1xrV61LcGnjkyShiLbGZLXkEUdxPTejPaGc7sQXgdbscZGs4k1pur",
  "key35": "352p2rAhYxtT1Q4FnqbPZgLtJ3a5PNSMkf7cqMjaELGSAVCTdnt41kenRmramnHzDo9LuNWa8i7dvR5QD5X7bKwU",
  "key36": "ePydBgDgebProQHL1GH7hm6FYNPp55CYGQsfVJzL25CdjfeMbfgqiD1Ywtb87KS3UU5KZJEkuGcQzD4bXGL1ASw",
  "key37": "4Rt5UVUKEJHhpV4xFeCmDyuha2kxV835L6xWJizZf1c1nDpQbUur5itPKyXXF93tHTf7cgg3Sy3bV1EjMPuabohw",
  "key38": "2tQybN6QX8tRiXULbo4HVGW2ZBeFHYhYTFftdVvU2jgUmmXS7788q14ek1gLfE2r6E4h2vzQ4GT7w5JpWpMdNfVv",
  "key39": "5cky2b2qndW4seg9jK89kV9EwBZfECM46Uxmy4wZHSrZCkudH9EjGaqVn3ZmYKhDb4AXG6SsQ8y6wVDckhnX9m3Z",
  "key40": "5MwLxgHMXf17hKDormCc5yHPN4gWcYFd2qp8f2Eu49kPVjnKorf3LkERNeYc5gDp5PhmQnCHyDqaEhs8LhzpWJBP",
  "key41": "4oUzdcHyRhGxyiSMrJMGvbmUF6G6LKct6Xs1w3rKU5UnMPHfJ9h6Qtzbk4MfEkGfcCcdX4fFSXBqMbgWHkBJ1RG1",
  "key42": "65xv4tnvbz4zm9dUisCX56zrS8BRtTDixWQpvWtULc3fhWwN1Vr1caavvWAa22d7rThMWvaavYPNT7GBRxSF5BQN",
  "key43": "V7bPTAUq3Lt3aNqSVzk5tn9FEBm53niWqccs7jfPhDyNwKhvumcdYprTsokPG6J1Rz5qZtrAf2f8UpeA1NpEigw",
  "key44": "4qrh9NVczNQ41kCvJwnfCM3KWpnkFwGtgVDiMG5YaTk7qCP3T7dFJNDubrv1wHhHTAsXpRLYPW9bS9ucGS6Lv35V",
  "key45": "wFMoHz318mLwKUdF7eaZSz8WR4VV9mimQxFBWBQuQHhRr3eruvgMjRpVRhd3a53BAwYMRafX3TPpKzSDPooiTbD",
  "key46": "4obXnLAQJRUiQWwY3xnSbtm1G9yD8NVyqpFywno4BVJQE9VjW7LZmcvVKzEDLXFYuwiVXCaiygFFjpRXUoKEM3rk",
  "key47": "2eJqWxyR4HPxQJeCcJb5LavgnBwWZpQKRCGgJeuEU6DpgFzxJ9dw2vH1yv7TLn14jLc9W17CJ1KWXkD3bTRQffVh",
  "key48": "3BNtewtgDKxv2WDNsKe5ob63QNidcf6DbWz7Lyy5aTAJmbTHNB31ehhV1NvPm9WYAvh9cwZiVhqaoQx6TPY8TpFm",
  "key49": "3Jwu386UwRSGtqFvAMoqFN8fWCsCv2M9tgCg1ZDb7hBQrgZV8hGVnZkywtdv5pDPJnYHZwo3nDmurBxZB5dF95AQ"
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
