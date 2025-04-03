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
    "5BKoJ3TeZwBx3iRPqnuam27SY5a17v5fGdvrFPSk8TA9cEqJ6WtoT5YxWeq2HpEdskjkKcdMbHXfizEtihbvGXWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnY5fyeji2oWzBqagbcgkxGjSZvggaxsbtJNNSRg954qxiyydLncsyV9kgKFYMTfvEr5U67sxw2zwFcV6VA4Toh",
  "key1": "4GbmzrREHnJpqDo2se4TQCFkUpkgAsM4jQWMTPaUZEWZugzdhqoBSz3MCZGMuoTSbpgPouBuBsUdQbcynTV1Yi3M",
  "key2": "2z4oMVe1AddA2gd2CSs6X85dQpDf5wB9GkcdiikgU7dwHe3xT477kY2EgqpB5DV9hPJCfTN1wbuZ25oQHfcohdsm",
  "key3": "5aDFye1geP1eFMTAjwUHAzthEsreQLzbr8aYAurmpaLHfibVtY8jWLEjfUUWNsiCLp6kohfuUBAJMMW8XUNn6RWy",
  "key4": "3qtPvJJKEQrVgY9jpPa4CmA7Bv5FhzSGCE9hvJbPpJTLwK2WSA5egkR3u6rxchLUGnutWCfxgGsXtMbk4ArfHbkw",
  "key5": "RLEotJkrq1oFTqvcyvuQLd2MWLXy9LfwgGmEWHGTjFe49ThywpFnCBvQDXEDwTWVnkLc3YYXb23HFWPbDKazPrY",
  "key6": "xi5QJFxcPTppnmmtikW6phgryWv8v37NbzFPi9joqbQ7yxUUPobwWLLfhyfNHNcpGAVNR79Xk5NWMqm5wi2TitZ",
  "key7": "4jEwxKbq4Nttdy6xtdo2BgSqtMt9ybjN4pPTMRm6BdrVnE8cWb2owMtDvJzKM6p28r8yRFycYF4zrNWGAXmRmSW8",
  "key8": "dJwbpmPRyesacK9sB7j5bFHXyG1CnnnkKvhDBRCkAHuF6k5m5gzjoxLE896mSZNoqygqr7ZxHPRQasBgr1WrFpk",
  "key9": "2gefAWFBiVvPYzrMXgWeFPhR83wuYt8tc3FoKCSQYJz53fDYPMFoJpHKpV2yfZtwymE9ngxFzuquDLcnnxoNZ7YE",
  "key10": "2Qkmez7bSsdiwvDJWYSKrHsXrpeK4DYSxfssx6WYkAjhDmkkVZFgkt2iBiBmK5Dn2YCg8623wx8u5TGig83g3q6n",
  "key11": "34aEybX3yCcoV28nKZaysjWwuBaGvwpo2G1cGzM79uyguCkWpXVF3UsZR7qXSvMRY3uwtDeXk4mHzGjf2ovdjfyg",
  "key12": "Em6exUhogztc7FE4CPtvGwaRVKLqFZ8J2DVdvUmbgHWGJzs9HdFFrsbhrkR9vQ1vQaNYyM97miGa2JRMZjxVgAk",
  "key13": "4DTSRRxHEoXorPyjQjhZbPsAewNyTc37yrgLxQjrWRBiFEYYC3QTMzGY79SnaUGhTbNxWnphfQ6Zk7YuN78h6krR",
  "key14": "5Kh2Uk9GvCqokdyHQvY42xT3zXtqkXY8iFumKeBmvpshnLJvwY3DqPAzLoPxcW4MNsZ5kPcxFzz1zdJUG9xNCbEy",
  "key15": "4E9HdbMBbEhsXVDko7RE6VkDLiMbdfRxaBztMXXHoB7HYocnbjSyvPWaT7uYzkVYTPwK4NB2BXCkUeNE41HunZ9t",
  "key16": "585q5ipa1MuzDaSf38sw8ZmenJdBK87Sds3fSPFhqJ6fFYQVgAs3Zmat3zvhHhSrfwF48gpkwiXT9dJAA8LzJT45",
  "key17": "2ooL68Qf6iWiC5M1wWQwAeRH7q2SwUAwcVj2ScYb452MwExZz8PXkxFnXothk5M7eGftcosyTVTva7u3qhLsV3S4",
  "key18": "2hdimp8aRowKqYefkSiWhyMccQDMoo4VxiNBqUVPKokcDh9TeeYANH2TrHxciZN2oLtbo2nyK8WtdKtk7gFyUzJ5",
  "key19": "53Rit3RFvBqrEK9B7D9LDNZxuLy8X2Ut1z6BKVsNqBD4aRE9hBsYNRGc4aQw9hdQ3ZwkXxZKhKqMio56NhSmcTFN",
  "key20": "4eBvaXTCc1fa5QKYBuuLyXDfXP5jbbi4nu6DixBBEdKShMXbWMxWeSeYzGCd3gpDteUvjeXd1MZMzonwp8N2uA8g",
  "key21": "65dxRgxWYQPbvRN9uLp8Cv5qBA3Rp8MM3LUZzMR2pTCvHYYeSFXnhGqn55ZfWNHqbMNx7rNGFM2FoF56DQibvaNG",
  "key22": "577TzB1AuGSYnRiJJApmN9W9pH2SPqDMQ6YmWdpbp2mYJao4rZhbdeqQ5ox6KruUmbXxaRxYJ9qNkUd6wpuBdN4U",
  "key23": "46pqY9ocsKcUCUJ9e5JNcSxoiXYc9Pgg2NuBQPFkxTDZFbFypdRb4UnF2shrRsW5WzzPdMjRRAb5vRXQi78j8vAh",
  "key24": "4chFsssZq524nPSAvkU75aAK6rCY5dHGZG6qseaWi8JnGs2mXtEYXziFG935C2RqviqKcR45eTH46MrM5ehFEwSz",
  "key25": "zxPn4JjCwp6ncY5ZmCynL5PFBbF6JKnrkWAqeV6sLtXgo2VVeqkSA7Sjk9vqPZ1jSLG23fNXfm51akPdYRvz1Hz",
  "key26": "3MQGRmxuo85GUFA6pUeqkJHSKRtvt1v15nojQepqzcLa49AuGCoR5iRNSWm1mJszWtdYYJF1r8toQfvPxx4AKsxX",
  "key27": "3dKTDLpmZRumBcbmWfMXpYzdY3NBGvDZ573oHPh8RLLyKcBegzEqMATM1cUaiPNXS7nLL3thiAT8CTh61gSPiPWh",
  "key28": "29w3sWji6q4yEP1iKS9xnvXriApM5Q19KdjBFTkYYRm5EVq4mosCvL51XdzMZfFA12xmwwo9me2MPbRR9jTZJCPw",
  "key29": "2omFxb1KaBn9FFj8JWrxNt52KjkJ5JZjX4AwYxPzZymSuPVDx7GGP4DqpH4R8NaBRYjDbGzXAkw7CWVocLKDFWUo",
  "key30": "2F7x37S3jzeZVP4LAZ9JnQEPnuotciRnP73nHHfPrvmuvcX37Lne59EvmufheXnLVoybNkAeY9NNfqsrcRHzksC5",
  "key31": "53EH2eT4EW9tHJEj4URUENAnCF1TtHD4pBtXNRZQdBHx2mR7fFVspddwPDEAhqJFV7TG5SpzPgbaVFbZVbBNHnYe",
  "key32": "3ZB1M93hWuSYR55vgwj32oMpZmDicfpLaFAmepPN28SbBAzHxMzFLSJFgYPEHAtXom1z1CgcUKAWyhPbKKfD8bdP",
  "key33": "3sd3Lreut6ceonfBnpocRUTonvNXPZC4PPvzRyWtBWwp5STtLoXZKBUkzvTwHSE4TtPFiLqHAk8kwXpuNW3ZPH8j",
  "key34": "27fKVWsGgB5wdQXHuLiCnJMfTUUy7GiZuNTU4eEHx4yY4KiviFgE7vRFAXTrxa4nzTZcMKxv7RFF6kLNUTsid6FJ",
  "key35": "3epjCL97Ez8WmYB8QU8aGinxJx9jhK7ZYcgCRo4KK9CDPNBf2XHKq6rta869VfpLYYW74s372HHBpQTZmK2n5tb",
  "key36": "41JokjeV9VMcdYuKsR2dbWd4qMpwDMfKLKWTDaYSn18qRzL9srx5SWn9cmJm2mpUhaQ9MWNJeSvbAsAtvrmkTLjN",
  "key37": "3KW2jU7rU6LFYGjeWx42EMvkSGmK35GWphPD3gZisfhLwe9FjgipUK3AmeSAt2pK2YkXsXaMYeFsUNiuydhiahkY",
  "key38": "2NcfdMBzExninT8yWbnhsjLCvVAmxni1iDpQe9UwF241RZppNUBG8q4T4ZtLbEfFn8FLpXzLugPgtYG58Sgk2jaX",
  "key39": "GYRVFWrvMt4VTC2HM534YXM1kqYqCKgMQ9Q4veJq63eYiWrPpoQXbooySFVuCUWtkfqmQqs33FWSK5NT9Bnw531",
  "key40": "2678jHKnyjtPA6TQfutGr2WKAxKZRG6nPmAPzWiGvHDP21VUSStFT4JDoUN95cZ92EAzXx4g5fQKaMnM8Dqkozfu",
  "key41": "4PBuy26ph5N25my6i9fT9PdZTVgHtLqvXwR14ky7bawgJzngFXgt4dtwg6JU4AcpLxYWS1S3XDEsVJriActnyiz",
  "key42": "5mP5kVXizcrPxfDrfHBtKPetidFsVasHuTnb1QTuuSFMxEKagKPPrjZWVe5KeuRtZTgyZRAhLdH1h3AqBLNymkzD",
  "key43": "3CpuJyQtrZ4QTmcBxN2VRAUXXPN1D6TKHEkQ38XSGQV7Nk7Baxz6ZdHgBoPHwAxXm29uwXMbZmxyWuKP8jQqSxq2",
  "key44": "2HTsTUu4ZipFre6nc8UN7zUPgdGgwPB6gDNweHGbSpuH7uLoVaTcgeQjMJwcuEPQfGKZkbUZ7KHEkEBDs9e8KUhR",
  "key45": "56GVGw3MKxVfbTETdddhLLiUGe551CiYZCGK2MwFzZyq4kK5yC2LfPHUTSCuEvLw8MghEsRB2oGdioZpp7baJf7p"
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
