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
    "UNWcnd2aFyRwENhSKtisSzqvaBHQQgVPF7gNrdFkQJG8H8c6yosM5vRPbmUeYqcCSEDA7kYsiYH3So2KGDrwcFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21pcp6K1NCf21JspCJ3rKcrguwQMdPavmRqEKAxju3FM2cQSi99TNAhnbBXW7xdCTrgt6bjKLN3cvozriFZphB7Z",
  "key1": "4hMcCFYYP9ubjodjAMMGHCJmfRSPviRtypUWgDA8xbXwXidLUDxgRbSWux2vFRZokE6a3qTU92y9NkqpkXvVwPGZ",
  "key2": "56hdf3kiNFiHYE94Nquz3Lgrt3TNst4TRwVu3nxzbYfW3iHxidr42634SdXqj4ZsHKAHmXyWPQgtk1sWQBUwJTaL",
  "key3": "5KdRpN9cs8WftmsrU7pAvQQhYw7DY5txHCn2zbrHa5SPn2JZQSgcB26z252JydrvLe1CpWhGMi2fxz9TRzQ42xF6",
  "key4": "3E4cyD5ZHrXU67SwomAAoGqGNFQauXx9WbJahgJVMMwdxQLzPL2P7hHDQ9XJsb28HbeHBfJp2KAp4D1GnrcZx4VY",
  "key5": "4FETsz7N737Lmbn6rboVo3B838yN2z8HYkEdGEMB5knKiaZyHoVnkDvzUERDno8u3PerTG95PELMsUX2x7Z26MHJ",
  "key6": "2hkJVCEqwTapbbpqG3iUAh9yKEwKW2Ubba9qGnqK3yawyoHcmiQsJsYtrCpwDrKUHKP38Lq4BtojPi1DALfhMoKf",
  "key7": "m8ry9swWjzEEAmZgNZfJeDA3V8rYUkp3eFGtSCMFmujRQNbtUz8f5wwyQPtugMUt5GPFcN1RNEHVcLw1qR1f6H8",
  "key8": "5bwxUyB2uV3dMLSuRPN21Zz6QksWTKUtjH1fF7DDiHgXa4cVZHpzgZvLQLxJ8NhPp4XwUYFpRJDVr3hE9boLg15x",
  "key9": "2Uv1m9NwFkpWD5kDRAmmkTQWPbHAyJYaHYGX95ZJgXNzjvG3ejtnp6Swrv2jmTGtbgr1UXnhhAKmJ6ssmN5F4R61",
  "key10": "2Upg4RYP192HqD7LCNzHv1rZT2HgxfZUcTUdpD96xMTChm8B9ibmdk4ZBEeR7wmJJGQsf5q6fN7o7mCtKMuhCnW5",
  "key11": "2Q4ZKTHo5ZKBco5aUmVYJiBsD1BQZiPEDSNXyffu6WxLM9n1FDV5knMseeVZWF23iH3CowXysvGFBRpfW4BhKjwv",
  "key12": "23Wb7np8gR626yWk66mTdKyMuaYjVjWDowF7wTMVBgUxZUCdRch9TsK5gxyGEcWmyUrnCcLr4Cx6stDDTAutqAvU",
  "key13": "2u2nqXQB1Pca6Bn4kuJoV79VPDcN9jN2nnekKRfHPgEqjTLqh5fMX2yYnXmbspjx2VhAMEQrAvDaEL3beokAyL5M",
  "key14": "5gnzyWPebjLRMmYozsCND7G9pVXpLn9GGxLTcy3X5aZv1cBfGFbiYAkLRfr8GeabBKW35jqAicrDw9ejLcaLbtKV",
  "key15": "6217YsX8bN4ibDx3cZK5F4oLMJWApdsvgZxBBfoLNSrymNphhsaC1PQvQ6co3AUteDroVbrMTMozqr7DmomwzSLD",
  "key16": "6HhjEEd2B4ExT8fCjPzUey6YJLFmD8WFYx2cJSxKzakN3ybNDjBGGNxqey8zbKHAwFsbKcWxZ4EZ63icHV9n26a",
  "key17": "4RW28AK4NMkc5o7KUVGnKWmLodpk9fibY1xNfzjqW1XLEQu6VSSznLogwJktaRyCXcCW1v8TZgeFLFdtbgGjCFku",
  "key18": "3br78HeAzPkbjwRc2QyGQg28MFj5djya835JR3gM7SNAWmfYGKdo5tugkX28mz8aPbYtqeZgEt4dV15irXmfjpn8",
  "key19": "2Yxu2hhN3QbzQ1RXgmHfeFdQ2B5aDqQpFFa4HsMtZTrys7uiBnRaRAgCCVKzwxEyoaubn5nrf2vBi5dUXiHw2wo3",
  "key20": "2fQ7okt6CD3z2fPUzsGy8jev2YNMgxc7n8XmEiY2eLcg78J1JtmKkeHWJskJYs6tK6wm4thn8mZ8EQQrGDD3ZSdx",
  "key21": "2Lr5cZuJjiYNnFdjcJzc7Nr6MSHDAbHqof8PBA8jM6wVrjT3LtmDckQNJ7rVuus1Hevsy8ucPQTxJ1tZMNmErTdR",
  "key22": "3dASpHEvQjeAFdiR4caNxhnShusTGGbeacKNe6qaCeNaxNA9eyTDsWQQmddPN96qST5HwNQf2dtf7aeutASswXai",
  "key23": "2F6ekAtHshzgvMa1rnxSZYpnV1dAwVjGPSiWagrpRNeyzkh6ahUBLcb8VGg6JzpjAUUvCAwPBr7tToWrWBC2SxfF",
  "key24": "4FHqqvexr6KHydjPYyWsterKc3CiYXPFvQvn4Xk74a5vbKNgmymkPKduCsrTEYtDPbt4o8nQ8ou3Zb4s4zNZ287k",
  "key25": "3Co7kCfx1Pgvmf6hRTyyzUcMjbDsthyMnAp4QaPhsx57e3T8QABZ6xC1RkyADRyDscj431Q4NqvnC1zqkn8ujwKr",
  "key26": "39EcRzq6bABbhGYtNWjYPegrsPPWAnAhHfV6G7CtC3UkQHFE8Q39M1nnbmebMkHhWkYMsGpm2o157vfRT6h6iTCb",
  "key27": "3NSPDG1AH76LdNiZpoLQNUE1hQNzhyfgKM3EsxD98mpmVuP2vwdT3CCB5p3QVMpDw3ttcjFi3GJWH46vLFKF5CnF",
  "key28": "39T64s4ZpS2pSg3axYt36hpX7DaQ3JB2KmK1XAcWvWg8mo17dzH9wuke2ukeD4YqZZvXzmQHVA8FAJuDM73GBeBm",
  "key29": "2f8jqSv6ksC4H7us1YL4tdyg3Mvfj2taGyjyy8yLPtAfQNNj2k7LSq3BGtDL6tU6z6rQj3dXZmrnecxYcGXj7K2P",
  "key30": "4gAAeecGVxMnV5wWcVrsPzJayaKqXb9oRpywCtNfC14PEUM9SHgm4axrq8tDC3wbJirjjDfxjZbE6TwgdhvzL6is",
  "key31": "WpvNzxQWYcV5Awtr47ofrDDhd2ZFWeaG3LdrYd3vEVZJfoS8P8QBzUsKUVApUCizXQtVexqYYKDQxzoCxHejxYH",
  "key32": "31Qitj1nkaWhqUkRPDHWXJ3FGqn2o88CibA3yzzd37q76nK3nKWh3iz1VpaTJpTmQjZPgmqr1Tx6HkyraBG5EbcD",
  "key33": "3aRRG5xsnGpJbk6wduRGqhZUURBw21QHCbXzra4XYJ1xMu1yY8yjJn42bTTAgwprdQGpnW9R12sbhhhEsZTrfMtX",
  "key34": "5dd3LnwdD6EhTsjvZkkQg9anNG43yz9uuS6vjFoY2kH83wCc4b8ix7abD4vGqKbmpGhCQjTUenpXVxS3iM6UTEVB",
  "key35": "2viNPcVjGBPE8Gh99jNJa94ZA8dvFLEDbb4jHqZPQ5ZB9T3TSNKvzn4zahtBXEm2dabB2fvKd1hHy1swHdJTGS9G",
  "key36": "2yejAK7psgV92STDZoqJeGoeqjVntL96k1aczXbnJ9M6S7AhFcHEaRFoWDBj9avwvrwV2b91TC4QePdcScWdYmoJ",
  "key37": "4EaZW6qawrPuUw7Vn4bo2tZrMBLRm56zH78N87FWtNwJqv82RwVTBPu3va7DqbCrgqog1typ8Zaa2RbB3zD93qxT",
  "key38": "37xj2AuxKkTa4q1cKFYedyrxawnMYxu1Gh7MU98EBwLqzCavkenWvjYrdAKFgqwsihChzxkW6DLAxPDyqSCxUvrQ",
  "key39": "2nH7E3YQjNeaLcye1F2FCwfeGP4pAWLYAM7wM3QnuPQXBsGWwDA4XKJWTzWK6jh4HVYrYqUdMeDAH4EqeGHok7UP"
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
