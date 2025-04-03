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
    "AAWPY4gp9Uv3tFAnic7uEtKmcZsPLAaohirq14VEaT7APBT2ddnNkPQ22CSENFTppKgCutbEnmam8KXSzqje4ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633cupqra2HyeX3kgyqx846MQAUm9FwD4mQTv3uVvka6r7L2ew4ZPKL8N9agKuGUJ9oMrVxYiVFjHPtpEDYmcwwu",
  "key1": "29AmsGuTp2UVi6eQQNkfbLz6XH1Q7U1W1tYzRxbwG8aWgtaqCML59PXwytHZYiw7SNi5Lxfrcx9aUk2RGP3RBop2",
  "key2": "2BFSARVb8CNM2EgsHyNgK2xD35b7KG5dpWEh3pXh9zzAQAHRLV9jaUkUdoJRtezRUjryXfHxM9bE1sMjo8CwhvMv",
  "key3": "2k7TEnzVuy1nCqyiH99X58AJBMniSVpV5E8qB1YWEY6ahrfy9xkbNd89GBEhECcdUe2YtGkZGAq3kGyvByvy3ovm",
  "key4": "rA7fkJg42GcXmkqjtXgRCdALMDKzTStq4a98nwz8d1xJq6Acs97wvFxxt5mCJWrbZfVDE6XQsF4T4PjiyNKaJd2",
  "key5": "3YHbFEKBjbvAhoXoBYrkj2wKkST9YNyE8hkAGUgYPeCRvYhVVacNJ4pXG6Ze1ZnDXPS13K5nQE6y7B7iCd1xeaAe",
  "key6": "2zntUG76C1nptveVYxRGK5g4jXqZWuGLdQeu4MTh71ztqJ3ZcJwPWviVrwprhak3EDt1Z6ju5Cb47njjqSr4T2or",
  "key7": "5ZkVwmVaSogXDi7wUmcfZgg1cYeerGs2vzjiPPNRRyA95EWRBUeNT8CGKrwdVvZi2rqkAUJQeCVUBvZ1FeqZB6ds",
  "key8": "3HqQ4wPe8dLWkLud7ZZGAmwkHqG92dMHj7mnUALBqt8BWhvCAAzGWF5iY5yfNd93hVEcVMGQtkJntcnxGVb38HsC",
  "key9": "4V6D1PwD8c7e7z6yEHR8vTsxmKE1fRjGP7z1nsja2MKxwKCiqAU2kHXF2936XBr44cyAsWRgQijFdiuKMdGspuZQ",
  "key10": "99ZGcbvSrSpGWoRX2H21ZDHFjvaXqHekhJwkSinWgbj3pttNrNKSPoFGn56MUDPtDrmyYPtv6aR3Z82TDkpMy2Y",
  "key11": "2UBjhKRKQvT7wGBqepsjvZ5TTSxS6jtZ68MAKc2AC6WpFPkvKJFzhvPBtggTPoTM7ANAhmH3D91xWa4Z9UAFAA62",
  "key12": "soxnWUjNPgeo935CaroCiNtGVBHm5qBmur7PioctaNH3D3RoZoqXLMq8UobSeSNy3EvqMqa9xY9v8L2yUSMEQMs",
  "key13": "9xUNCd8m6aqa8mcU8QsWXL8k7hZ4p68DrPfDKGytR3qBQogdSh76hzS2v7wYYdez5EhDjfQSq6qYU1B2uwKkDGZ",
  "key14": "5syN7tjqkbgDKVxrRNsBndeqRGDpMcMDDf59bTYnGpgAKaD7r5jkz4HzuurrRkM87ENbUmvkm5DwWNfaBVTnMPye",
  "key15": "2FD5SERAHHdAjdM7gxxoPwE8uTjHBtkyjAuzhViY5CPq2mGhdAuznctEk5n1VWdnFF37meAsRtxvryfDLiwtiKPw",
  "key16": "2sR7oRQy8SHgpqMptNBbkwpLAGjofby9mWujUuGjgkgyY2gRTDFLpGLdGYBxdjWuLE3mgqDMH2spjZXGTh35vNdE",
  "key17": "5DrwpcsuCqxLHWmGd7F9QtaKEkC4VpNBWPW1V2CfqCeywk9ZRwv6yr2J8M9bsVwAcrcBi5NFkH8aYfH4Tx7YPdPn",
  "key18": "4QcwVJ8zzeAV4BSd1q7tmBSJEBFniqJW8zhbJnohfkTwyUp3D5hFjTV19UC2BS55CEeT2xHkeMuARQVyqWdD4Mg3",
  "key19": "29n6F5a1iwjfbdv17SuPkHrMw1EU9CxUqvvvuXX4UMVyimCa8uHQYzo6vtVAixHLFiC16qM7PzpK368zLRBr3dpP",
  "key20": "3jMwhPBo2fB98dNVRxgGvipcwBFYwvAdrFNggbRQY7asiXLnCitUyeXQJ51kpQKfxscpCBrMPTiQ3vHQYxW3DmVn",
  "key21": "4KeisXkCFR1FwfmQhrKnzpH9HMW6b4zTkmhxHyfKGCyJasFUmAMVvLcuvPsFDVSuq85zX7cbUbQk39pnPygxjTqq",
  "key22": "2MKD7evdgh5DU63BQw11D3vsk23pkpT5Mom6R1BbjS4jGBLWhiwDxjFru8iBXjAN2Wbr89oVVg6zhzSYCerSTVDJ",
  "key23": "4khvGVJU5fF79SCTreEsoRZ963RwSJkkVNVpHM3QBf9puJyNDGLsfV8BevjJNFdxDecULvd7vaE3NLiD3t9Gc1Fd",
  "key24": "5j8f6WPsCZGUu52nSYPyweyQCYum4DHTeJYs5B4vi7BzudBGMYZVzHtCtGNCdpC9eZ1P3c3n84oQ3JTeHou3wQoZ",
  "key25": "577peQCpnxy9J4auogLPwVRsk5BJYvN3CZCLnrjbXV8R54xUtD8B6HoczirTmw2c5grngZ7eNJ1EoucEMakBviMK",
  "key26": "5PknH74ip3V6NfG92qKy2qYbNaPTu9j6pRNyzkr6gLHJiLVFBPUX8KoWwrKhxmdroFuveJmNdQdqnDLnrfpJH75Z",
  "key27": "5z6nc8W33nXWjqNAW9BTiU5fNRuBEeRkcya1L5PhyzUhRJvaQLNKhbhn78epkR74wih8JYE3oNahku3yUKuQ4tid",
  "key28": "4DpWqT96gaHDiSR6owQ8emoiGYfNeQk19bc2oUDTxqBgf5E2cDQhr8kbPAPksnXoMCJbeHYgj8HageSFZiQAoYQ2",
  "key29": "bGSeZfufWM2mdW24WvSkPEZ4ZaGQADK6WLhVgSjNXZWNvvfcGRSH1oxf65e8o5pzFwHyGyHdH8K8gGpPvekVaXt",
  "key30": "2zVUxceMw2rNtmwcy9GCfVC2nKKXcKNHFQRcLEK1XzzJEpCGRRkGRyL1wxqmLs2XBF3PQQVzQekZJeF75YpNvEUe",
  "key31": "3cb49YAPuxJaqp1WpRGUPU5MLLUZxGju5f4BdNJkoRke9STF9jb5Vmp9bgRomHh5B3ag1akoNo1ZmBXcxZpWCPqe",
  "key32": "4CbT1a7JZLKxNGTeqvRf8iBtBNULucdM62HaNTmDzxY4Sg8pWiWwoee1vUWqjgkyaPmsywPgrwsouPiz9qeUNePQ",
  "key33": "sURd4k5XM35S2rjRodvDjFu9SmRwXbCTFN4EzMtv5krpNp3tECMVuMMYLHu8ucpG4E4tJkPXHFR2NMEdut3oQWe",
  "key34": "5eUsxWP6QW24yUwn7v3keewFuj7AgRSj3VUQnT34R5FMiMwBcBqNqbJP5Q56WGTSVezL2LSVHGVs3St32o8czqNx",
  "key35": "2LzxghXHggWwqtj7QZqfEFs6CH26Y2FZytbXwrR5JWhtCNfVjPayjv6XkArWSELzpuqbmvRVsR54kMDfvg8Vy7TR",
  "key36": "54nsr2iaraQafLFj1okxCZHr7K7QUkyQjDdgRzf4WmvJ7xQKQU5XjgKuPapJdxpCvse4TVmVRA9kdnSPVQdJ8EMq",
  "key37": "57KrHcT2XF5seww632Au5AHi2wmds9QpobTS1hs2iHjGfiCDRSqrmHqrEaZ7DaZ81JX1YkygdCYYFe7rgkUVqK3k",
  "key38": "3BUk1pVTh2jNwXTy4gGnj9DYzZjiMsbbfRAR8KJUUeVVTeaqauwLmvBH38zDb9XgZzsxqdec4aN8XDBcmNpxHpet"
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
