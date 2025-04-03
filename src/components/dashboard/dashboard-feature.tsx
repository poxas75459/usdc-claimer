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
    "2GZYao9npcMDVuyanVCC1KuSbhJ4sU4ayc8gfm86pFk5e49Ezzwpq7CHFSW1JCqppx6djrrTGCtPTnC4rWRZY7Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TftjGNbvrJQPGqPfBgNWpy6Axkdq6mByzT4sryE5pKe1sAgBTPKtGqE6UxCGkkS9i9HVudaHUQ2bJbhDZRzauTL",
  "key1": "pa8ZU5LJG3EUzSPpkQsvBr1geaGGq56TRsMGFBcJVj7B9WioU2tNkSEKDCicv1eFvZfEa2AZjGLjp6Q5SdxhPrf",
  "key2": "3DVL3DBUuEJewUC5ATHKwPyP8r96LCc8wsLWyZoZZxn438t84k6hsdUuhizPjreRPCw5yjAWYkx7i1PSvUxyskAN",
  "key3": "45rtYCvgBo5t5DTnZrXXW5kZYSPjswtXpFFr3ga5oFdUjcKdgbfsRuvyJiesvgaCfWwqu981CzYbe5RbFRRBUb5T",
  "key4": "5HsRF8MzQRQ3ndNJsiEGe7pcpZGj2RvuiNRxBSGdmt2gAk3Z7HZWptgRm1QLQCi2VELvWs71ZTbb86Ms4M85VKoU",
  "key5": "51pJL3k7bggrN7NDJGGPXjRTceQoqjV9ypjnEzT3oGXbnxkDCK1YGbNG9RmXg3SyuaAYaCVVk7EsiHSWsdABzLrP",
  "key6": "3WthYPaLjsqq2HLPB5DyzPrzbG5KknjC8adGM5791KcnjHYVpHPeJC9WtPfL83aUvc1GEJQMmp8qbdirKWRUzqSi",
  "key7": "42nQfkrV3GeD6LQi7EULUmwhHLzp6uef7fjyp4UAPEXvqGvkc6YtGt3fv9f6HeNxQeQXTBRxRnQYhPDPwUvxksgv",
  "key8": "W7FWS1pBSDixh3Bz1b6VhoryWgK8ZBEeumJ3tQtVyoTY6PeKb1Yszgkw83tQHjGdcANFTgXEcgUdHqb61GoUSey",
  "key9": "5NXD8j4NUGzBYy7JZehcLtYjSZWsRSFzrV8w7FXchGde7T6DrXmYXaTNpE5vB7mVpwGq9aCXs1Z9mVMwfynmeGyw",
  "key10": "3zpnZZcHJJEh94ic6zdQnEKhSmqCpYQi1eefayZBfyd8wvJd6BiVp1dpNgqKPiUf74TMWUkbWAfwrCkfNy9qyXCT",
  "key11": "4pTVUxAuTrFau9AhHS4hedxHE8LpKjdpyCvKgBXMdA5i6uKLaowDhn9eNtuLtD9jSFqDG4mqsW2Fpnf9uhBTedoJ",
  "key12": "38zAARgbLQyzmAKEUJ3ku8nR9eZP4xTYcwARB9Cbpr3WZC3kMifRx6WUmKBaGzPqrfJavbdARVZiRFz9Lqy3kgBq",
  "key13": "5ZykukBY9mVyaGAHExpeiyBkUm9CX2hnFRHkdAf8jJRTB3dANfYkZGMAfndqcdwRsW7wgfM8LYE9ZbtfVK588hPM",
  "key14": "3Lj8EBp6tHDqBVnBoBD2L3LmRC7mdPJiYj5nEJ4q5hVVE2oKn3p2JYzm5sjPtXfYMWc37vgtfnBiKDfgDm2Bew4u",
  "key15": "MmeVzhrYFLA17gtyGHibeLhjvvYYGPxir4UWF2aS3oLRPkeyqebjjEMUAQyhZKPAeccnELjmn3rLS4G82iT37E3",
  "key16": "591EmEUEmXbg5ACkhXtaFpd8wNKc79DL9g5bzbps9atbtpbcozNBA5xKBPP2FFjvY121Ri4i98Sq7Re7mPiEizE3",
  "key17": "67VyeRQnkbJGwbNqLTizzMBMW195Ps7Zhis33CMaiNNR5ywN8Z24p6HSZ9wN4SYptPopWCshS6mNX6wi8oXhfrK4",
  "key18": "Uh7RBF5rEReVyEPqgY2B8Vd98NLNrDwRPNjss9A2t26cuzSQK4cp32WjxDp14KriziBCk7NF7J8GVDf6RfGpNnv",
  "key19": "4kvv6wGP6RN5NTQtn1sCkgxcxAwekCQPZPUytL2UkMrXqCJfevHqxS2cae8ACQgJ7F7vcEZ75oBqW4ryM3DFeNHo",
  "key20": "3NcEwfpZmCHSakd8BPpSrraUK7MyNSxLU4BcN9zcXQk6CGghamEyXVvYVrhabYedjYVPzuq4LfYs7oipJqBYJNXw",
  "key21": "3wxkPQoyYsLyPK3eKKW6DxsmVbF9SJ6UuNdKmoYserBnfxzHVVdFosvhT8X8JwjDq9YSQZX2gANFSDyJeKkujoFg",
  "key22": "3EvtyuK67EMZEGorbjbgp9YTTmXPaozM9QH9UvS98bZh3zYPKY3yS3CM83JypoHN8QUXW2GraTuE269VNY5RBjiv",
  "key23": "3R1GNm8jTzFVLYi7uieydbP1qqWPTqWdJ8zmS71rFF4TNavBZQGsht9NGMR6y32Pqpn9WRf4cdYwnx4JmXzqC9vD",
  "key24": "5F1DX34rX8D5LYYdSmE9rJhj3CwG5LUd91pET6uaFhkQNQXFdovv9HeiViHLUB3i8zuFYjgvXqmSSWDSTnoVXVN3",
  "key25": "2qKL6cpREu5bBoHKxUGCAKupsfNh2vaSNCCyJqtdoR9ikEgG1p5H5ryLCwcBTnCtrGYbAEdkeSz1T7NVSuKbQ2sn",
  "key26": "6RB8HWycCd2MUozaqD6WUtkKmBdEnUwwfVgzkxsukr2v4tBnWSer7SPVRsqcDhFUZGVD2H4P59PqSaCZ74Q3UDs",
  "key27": "5mm6jAQcdB3PHL2aSxJ76Vxrb29Uyikf5AzBfJyCKKeD9kidGPcRapGGtuPeV99R171EksdY9CzDAe6N3JePL999",
  "key28": "31q8wuzzYr6XhfkRchdWKwhVSXMsuifTZzFMcg4zzs6okLVgbzpNvcENBGZ1r3Zs28rDTmDLAujERxF9jxbDxy7w",
  "key29": "42khbDDEy9onfszNNhhqpZmXYG4FD5xRNo6TAY4XBBHcXZKNT34jrM5EizLRBPKXNRZWyvoNWiUc4HN8LCq9mrzw",
  "key30": "avQYpeTZxRUvRTo4NVTGjwEzbWGSDccYvpMRzSRQqY3vhiykeLYsrMRpHg2WYBGwC1345ro4TTV483yUiMx7jxX",
  "key31": "5NXCfMtM6qNRGdRbi3gca3RDSrmTjS5GKQb8mnPRqedMmnffUJzY6FAAod3bo4EbAdLvRREgaXJuw8hAL2zxiGwK",
  "key32": "66seG41f856ZfaPWRbyNJdri717YVsaVKzfFqUtxcocnEfp6N5JHZwWFvnJuwCa6sN9DZSZBL1byrZHPWK313neC",
  "key33": "5okhvuvfNxk7f46sfmPyVnN57m9x591mrceUiheZYz4scUkqFYuh4PgH8LNNiDBUWBTrVZwbKNQn3dFbLKL2N255",
  "key34": "4iQZj9pegWRY1ic7wUPLdJnfy6ruaFTtZ6QXaQWCj1xdLne2usoJpqvr2YNRVYnBaj7EjwG72L4tMCk57cnonddt",
  "key35": "4pJdtqJUCogcWYw8gsNxCYVRF21YCPkyhtGajvmxhYYmyiVKRjsnWpGrJH5GedvEro4KVuQofF5ZkWmbC4FwEN4L",
  "key36": "5qDiyNxHv8BaRQqSEiH4SXnxc16VFxPZAFyeDN232WngXrPCXspaKPB1FwUd7tHCsS8sVT6PuPtYiZNK67swLHAm",
  "key37": "JaxU26xobWVJeU3y6fbyASiBv1QQDeo8nobmXbSpaYXRLAxaLt2EzUos64Zhp54iwNdDfLNnMhfXfeNAfiSmtRN"
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
