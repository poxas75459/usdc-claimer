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
    "2XJWjxYM1NP4S531PPvBBabBJWhjeQDh9oHBkLQSooc5nKegXwTJofirNjd2sY7tR854dLsJYBxzCFAJgNDNpXzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VoijrALzGJxSCMKJDWQyPPBTQpEiFELSHxT4KFXwYtt9zVh79qXv4fWG3HpucCJWGbmsSFKoP2yANTbCjovmmRM",
  "key1": "3Gi1Ye4e4ADM48rVUXrVFWr4WjtAoBpetZuasZy8QZ19QdJCoa39VgfBvVZrwj4AMpsTjW9cTkyqarWYAAWMN56j",
  "key2": "4NoWvXFKYpUDnQtuQBuvDdGvE6GSLBggX7rfWHNuTPKXGqfYwuAZKVhEwDDJ7nBZ8e2gJyxTpHCEZbHvtTq39PZc",
  "key3": "mre6ainq6wAZTQ78KtdgVBu4pxm9EbJSRoSNLhjBvsLSE2LSAyjDj46pTQVKWTvuDRZUwT215ufnFsvdtzUJ91z",
  "key4": "5dYtMgSY4vzefRAGabkXsr1uFwkj4daCMfFQWeeZM8Aq8fR5msLKX9sixqptmAhc5hij2GwkPW8ZWtGQuaPv7Zak",
  "key5": "4vNR3VLAAACHXi6CgEZc1YePo3pwCApaQu2StGhbGeUTyvrYp7qNwb1Cw21K1k26kGF1PKtLSATgBLrMuQq8RZ8a",
  "key6": "5km8p39Y4AQU8PdbqnavZueLhjzHykg2pfDHKdUZQZzX79tjghvToUD4phHztvt2BjCnYLhP88WUHwx2qX5zKP1U",
  "key7": "3E2yMYWJgsTeKy2aNb1vA4K7GcVFwHiACFxrkCDJSpMk5rcT5JWNfm6VQ6iiUfvFE1j7mh166uAiCUhzvsJT3aCM",
  "key8": "2NTdSU57PrHRsvmkqqpYbb4F9hVkAA7D1mnteabbRyv5hXc25pmXjEuhEezF1x1ikM4aYJc2WNzfz2eMATEGkVtk",
  "key9": "5bW7urX2oHGWxqNHGQ1qkTtK4pRvrK5ehUP1chsQuYJVVEUkm3RoX4er4NMVnPWDCDvobLjpJwoKd32nHmpWz3xr",
  "key10": "ZEw9RqVUkXxKX6sK8jkaKxQ2oPq31SifZmG2s4whBgvfHUAG64sbRZRwJ82Xw4aUPrhEASEWMtPfwZFHg6d9Mjk",
  "key11": "55NCX5sJoJn1Cq5vaHpEXtXzZaKGeFPaczewqTqDEetNeEsco6oiLqbksWL18WqBJbHKk5VY6VYMwmHVGPLfTTuP",
  "key12": "2aNFdAgbNVeRG2TTQ13QmjG4UTQvcx1ZdsJSM9pfZBWfre2jeHfcRWSwhi1PwCh7VXN5cVZEKUnzVitfaMMFS3Qo",
  "key13": "6wvjdL8oPqzDJEVH2qJ8WJedBtYUT1vF1AdpuYLUPSg78PALn9CZEh6RXmM1p9bVvDzTcxJXBzhB68ckKuWcAvD",
  "key14": "4hZK5dre4Fkwjx7sNeXT26jpupojbLczEQMohAxiG1ibMwKQ54mtQgfzzF8NFQ5e9yPBTuJyEpaSGQeiTdcWxbwB",
  "key15": "23KEuPQXbfU4gajhMSLDcmpxtWx7Ed6AEKwYQyFBsT61cLNZiPRxeCfqdz8FXzLPK1fmL6fsHZBAKbVBCgJ2PnnQ",
  "key16": "2JEzBaU8o7wiunERpPs9BkU7HEcPkJuBF79J24AEnu9c59iCxZ4w62iwp7Bi3QQq7cw9BuJyRJJUNcZc1LNzc8jF",
  "key17": "3jpuANdjN1yzzKC7CrJUig7FruJiQfXWpKCRyFN3bKpnigzG2ERS9kusvi2aNSs4pz1EPK5HuEeqczeNMvGsCFd",
  "key18": "3EQW1KeWAkpefTCFJns25URdUWLBdg27eofVKoFvSdqrQqGGQrCH8RCCNj2a6a7Ez65xqeYZ1yGGwaE2b2xKa157",
  "key19": "YTRjqQKRkdfawxmatB1ByEzqtKeVgXfkHxwfrC1sSt2BaVkr6kFexBwFtFcD3HvkButmzHbB3L1VCHuyvtViw3K",
  "key20": "5TBrX9R4v7EwVrVzAmx3aVV3H9CBu9T9eWyndvjoHHzdkGc9oBho1vt4bE4f6aXXgjLuWZXxmeeckNY4RBgdM7e8",
  "key21": "31wFYSeRebbGzxhybE2xx6kzed7VszAt1WWe33rLBk3eGxZHNp8o6dAciZapDcgRvEdDMea5QAwH4dy3W2zY1hDe",
  "key22": "2bNr2wXjBoDhpmZMcaKmzKZsi7y7PTXVYHUMXycb9ukQvEFfRBynKUgZxaFN8uYWdqMnwLkrYDrsH6D2dMDBMtKi",
  "key23": "2kFdX4DLNKKPf1i91ABLH4C6hqjzem1R3YSuXtFFRCwwTM2qnjBM5LX6mdQ4W5GmQn8ekSgtXqX8rYEJWSEwSnaK",
  "key24": "E4mkg6HRqT8cKZqn7Yjep2yqhiCWDMoAdgCTEUjkaGm1MXp9va13SSru4TjMSDJFbtRoT5m9yMCey3zKN42Ypb9",
  "key25": "41UuBpWAVu3eBkH61KiygL2ekrvSnaY8mUUvyKsWXXZPuTv7FbvV4hK6YutYsZmZxWkFoVNJfftHbLttgHyrWsdu",
  "key26": "3WhXjhrSfRqcAL1odm8ohXZGXsqzQW6Skt7f7UBGdoFU1qs27vKuhECL35gnr2UpH8XVeR652axbeYBPCMbNiAan",
  "key27": "3Mk3QrNqjcBoB2ocfvxm78gj1VjCCPi5uSv2MKupqjzsq6hipqRdxQ2tjJMLX6JrwMm3zAY2EL9DDjeFs9mooTTw",
  "key28": "4nYWDvrRfHndj9zhoVs2e6ga9eFYYUVGdW7C4soNYrW8xL7nqbhcrK9QvEumTudg6iDZSmum4zBMjbzjApv6X28Y",
  "key29": "2QUzLevBh6o85pCi4nbdUtRcaKybD9ASidVLF89hf9tLvWWAcDFSyGY7GxZU95kTbW9ycFdwKfv4tYVYQBUQUL4e",
  "key30": "5DRpRo6rAnHa2geGZ5P7qBM45bBQpYLywHTXNDhN6iRm134aYPjmpvYiKj3aLskAPVRayrQmwpKRrQc5QSkm1NCi",
  "key31": "5VMQSwXgXAk89CA41kQhJaAJ7ss5i5tjSLdMUVDu5MRRJaT9BooeM1vnZheSPnFSifU5FD9ZkqdfwfP1JcWyqX6N",
  "key32": "4bkZxYZ1oHStUPTCyaiWmoSgKE8dEr5cH5XLBtKY3R6hAChEU9N7YpMDZrdtvrawqyyXRuA1APwitwhuBTVqdXDF",
  "key33": "464giL8mXhJB8PexCfP4y7P1KYq84ZckKBAQ3tUw7PWtJGSJh5P1WgauJPCq2hudE8M4dq6uid8r9YEXmeHUAg23",
  "key34": "zuyHHkGug6mwTs9P2k8j8UTP1WAP6BK3uRjGcEG96nXDJW7F4UTtbPDdB9vH53TceqraQR5tizjJKTJwBomBip6",
  "key35": "3PzThvLCG69XJuCrmgWBkdcXKJdg15b8NwZ1aVsP1zQJKg3tWaFbQ9SKxL3K75GRX6C5exCKAkrdPBKMGe9SRLGy",
  "key36": "3n7A54Qh89WqK5CMwTmTc2uG13JinxLhHP48aCsD8uyKjaMwfxJkeeyTkPRakPfgGdPbAgXV3SqChXKpNMhAkv4E",
  "key37": "3UNZWSU1yRWfVRwhJk1dGNrkrBYfD3N7fsUnJYNijDzQUDnpmYiu5oAHi2o1KeVZ2jV2HHpLPMCKVL9djY5ndwyU",
  "key38": "4D151HRQZodgddShYZKa6NhySiZTiKbk1n1Fe45uNjbRzhwobAsguBsxs3FCjL7pihtb5ZLz7feazMPF3avqaWkd",
  "key39": "VY17tSW791tXKwn3vQPG3DSMYJag3wcRFXDQU3DAfJ27gKyxJu3GatMP6b8xqNpsw4vAu6k3W4CZkgFHKFsVNHF",
  "key40": "k8uX7wXnr3ssa5hNzAoXYdMBQYqoLEqhY6dZmu1vMXob748D1i9rSBqq7kAFD8B26PRghWin7QNeAPZ67ENiNd1",
  "key41": "3odYx1zP4MHeHJBC2xxZycFRMjAzoKnbtBbNPhmbAygv87p9ViC1hAZkqfTHnfAiTGW4nK4NUpJJ8mKgPTkonP4P",
  "key42": "4t5tYjJ1njiS7CRfTYyPFhWGuJGDj6sBgZakkL9FTMdAVaGn5VxpEQFqMHuuF4NqF6gejG6Yras7AjPW6cUP6keL",
  "key43": "5Z3KkFoLe4kBi7CCjLVCUxrZJnhafmgULCZFiGgZ9whrXDePEqg9QwWX4FSkfQEKM6zzU7WwBfh4JpkktZHmsLse",
  "key44": "4z3ZVnf9k7vsK111qpdLri9KAK9gfJkydyA9pyC3cM6iJ6pJySNRkJB655zc2br1i6yFmvv59kePKesDrnrr6NwV",
  "key45": "4DVGMTg2ftGKjeuCJwGuTtf99qkMyfZF6GbxLMnz23C9V7iNogeU7WZXm4gUXxrszZbhaCZm7jQcQYjoieo9W7ZV",
  "key46": "5FekkrMbZMektTJC9vzdRrhcDgJRwu93R3bJ17v4eXdpZqWW8wcWVSkwpCF5jh1o9WEf2a2VxgyAzLcrzKApouVb"
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
