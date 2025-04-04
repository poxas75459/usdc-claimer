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
    "2YmEfksbL1Q2JDbPyZC1z2zRb55RK35S63pywZofnwdweyFE42TpRMWUnqv77ZbaEGScCs48T7DmY6Mrk5G9Ejuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTQdfjbS6vb4AKDcexiifvx4zTwT69oe3ak45RMjVSHaptcr3L9PpT9ZGmjG11tfdCcHwqbdtMJXDLbFwb1DuLi",
  "key1": "4VbwtwraoB8uy7mQxrymbSxA7hdLuQEqML4uhhZtBPmRRBP1Aim5NAeigzueBy2EZBw63qrt5NdoUa3VXdq1phwd",
  "key2": "24a95CmUrQJhAbbaxUY3YdtVcWzuFRConRHy7jwSSgVscpYGPFqobMqJBhZxRKzsQb3651v2gGj2mcLPetNB9PHW",
  "key3": "5XA3NbDSPyEV4DXb8Fj73VeUq1AJ39Y4CqsA9YQ8kw3K2YHkBGQCsfcQh6MDgDmaxUxH7fwsTcj27HSShfNTVjiW",
  "key4": "dQDbdRgguz186NrHQi8kFhNP9qaj9eX53Xf2S16ajTxXjDiJzpNy5rcTSwi8iHEsyrpKuYpitvQgF4QLCuEX9sy",
  "key5": "4Jki23PvPohtKcAqqmM5tMpUrohwVC7RjLKuGzC5jMKmj5ytsoa9Q1aBoJLUs4YgKnLqJmGFGHrLZu9ha8fknFSx",
  "key6": "2FAJgZ1XNV6ZSgNoi4NicVBS1pxw4Gyi8xKMSRgyzWxS1XyM1Fn7uK4DUp6XJ628VGyE7i9r3YuBEwjREJQhnYL6",
  "key7": "661GGLrBgj2ghfPmqRiZT84nxQUB5H85E3dKEkXLJSYFmZfrjaoVaA4tJuEUjXveYKamJVmGA8mhfBvsBVBxCco1",
  "key8": "4WLouEyEHDsDqkQvMWAtwo4Rei8cseXfsK1bVZETSW2g1GbyVsD5Ue8cTQqMTkfKxZR2MnogaAB9dCkVLdKYD3Tz",
  "key9": "2XNacvWrT8mF8ZoEgXfMsnkwo953FsH726dvLbuiiHUML83Bqu8zRmxQxxA9UHNEq3cCYvNS68FoVJNFo9h9Mhof",
  "key10": "59RzQ5nHJ1ZpSwNAfPGfgDADKt1LofE8nsGaBCHE4JdokSVhBUTmw6zj6c6YZrNVAix9CVAQa7ZMiN7DeDGYAdBq",
  "key11": "dF4Sj7dK6thKfvMW85eDpABKKp4kbm2f1mtkXG3QpmTcro2PExAwcF97qo9zMcuFLbVfYwXcme264twcTxeHyUQ",
  "key12": "27LBhNJMwUfQTT4odVotMrP3i9QvPL4NiJ65shmXB2eWmRWF9qMLyG3afTPiE6fezQyqKNhQE1gd1goDnj9RBhux",
  "key13": "5Xf3PG2N9a9ZnropDVedhFe2oA9Y19NWi4Fu7UxYmdrkWwDX5RqTVL4fdcVd6HF67kMTT9FRJYKt6T8eTXLsGCtg",
  "key14": "2KVrYiGJyMURSkfkdjcLcxQDtNKjWBnpM9HCiPp2jouYYDXZCftB8BWbCQQPkrV3He9iTeSdTEUDoYHNKWXTVib1",
  "key15": "3XS4ge4dNRvhnjzmaKXP3GYPeqkLD2SMMjkbPHFP6LTCewtNTK81DNmecedzfNVLHgomBbfKWuBwkxxgYQLxYM5E",
  "key16": "4mWjzydhcuazHzHJtrWiW28ntrCALrH4k5YEVx2ida27N9Gk3rMMNKP9511ke88zaDKBiYupaa4FxZ6bziQexZC4",
  "key17": "3HysjdcPaCX6soFVVjAQW8SHraAtMw3RtyNfKYn1ayeJHz7auZGH46exjhiXVXwFG8f8vpZUWJieqJUk6KhD9DKs",
  "key18": "5EAk7N1i4n3rf3xnpxrokdHYrwaBPbSZqQxRAn7tBf5YyWC9VrRqZxkG5gNAtkx1UjxdJg5etTMjagNrP2u25t4D",
  "key19": "xMnDY6fcTt9vsjkZHir2ogjCuLPQScspLPZT5mtdGTm1kZC7A7Yt9nDVTWhc9RkkZJ2BGsnPfYrgnBmCD9N6Ymx",
  "key20": "3w5aCBP1kpqdMeqvKqRg69oou6SidhQUA3xVAEpTapJuM2TKjy3nrD9nKAwLDeX5XB6akNzrMcCUvTjPQwCboUQw",
  "key21": "5A9JCx5CoCfEnEL9byuvmbSP8psDmCJjU6VzAEHRDxG9sWdqmAMwkUvfAzzdvHFRx4NVjFB8eG447mPzok5UooYa",
  "key22": "3zpEFUm2HxNWp3VA7kVxMVRqoqoE7Jkzo7E7CNdpjYgKrkJexnJrHNezZDVM24HAnTSX1tgyF4mbYWuhg1K2hPXo",
  "key23": "SPcRZzTQMtaickMoL3XomwdJaDP9bho3Lrtwre4FryH3GtageZuwuJSQwD2QE8JrvF3HDpn4jUEwPkSRzjYSah7",
  "key24": "45wyv5w1qdJcUToiN5LGdao9x9aXBaAYXkSYchxXkSAxALyCcFkBTArgJxjdWGj4Mf2ik4WTYgSAKn2RCj1KPtFp",
  "key25": "2oFpKrETzQD9bYE7peH2CRvd1ztrisYsBMQVGT4gbwjk9FBzkp2s9jo6XgzTeFGLVFCTJVYNCQHbeqVDwYewnrmP",
  "key26": "e2zL5hB77jNxF2jnDCCotCC8GEoNJtSxy1xePZzb2mPuRmLpVnFwbvaRMvuTagtQ7nkPXT8ohyW9L6a5Heuy7s5",
  "key27": "2RMjXzMLRrpwNLVHjVG3HDC6DTQFvGDKio5yDQA2nQ5MvRK9DMcq6wvoneJaBxMRTP85NFbRP574jjJvqCBrv3LA",
  "key28": "4bRvGWgwjsLR6tg8zqvjEvTJBVG4RtwnMbyNvXci3qbKE6xMHtLAtuvHVicsF4gpHy99oBcDw9hRhMy1C795LRKD",
  "key29": "6AJkMLJejRbMp4nttcYefLkRpKv5Jf2EwA96DFipK6C5gKXiTujW8K4bDz6x5DkesVgLxDaB27UP83kPg6z73Nu",
  "key30": "5aNDpHiNSB1F9X5mL5zew2pDuDuZhgPBwvBPkcPp25XLLC6LCwQ2GwnBgQiojbMfUTpf9BujezfJgM51HuVmP6ZA",
  "key31": "tgJpG8dTw9bfoBnu8ieiJ5eGCWRk4BNZgWXoSAVd3Y6J7LsXLoSRCXPcTVykk47bEsbQtgMLzh9SVXpJKgtv51i",
  "key32": "5KstDHVqNX4g7Kjie1sip5z5CXRoGkXWdoaBSTV5RwDvUkmm5EjMpzcH81zPjoh4fGgzuPC5u99Qf3pVEhZEHYrC",
  "key33": "4JnMjpFXpPETWD7A3sbgSVVm2sTVfw8yCYybiL6JAgtSXcDWBVC5i3q3ctoyPAJALur5nfJhuqcLEybaU4w2xx2B",
  "key34": "54iMyg7mAjgvjp6owc8kJUYt2HGUosFQkCZvGdXWC9fDa3KqufK4H5dQCvSuSf6mWc6M3GvwM7DtysYJy2Yv5jo5",
  "key35": "59Fsk9yvzzrhja62CFxHGUyZ2jFeJsXgMC9UtyqyTK8bGAo8ifqQW4F5bo4gAvxcZyrhtDXsZCVe3LN7ZpT8nh7H",
  "key36": "xCeG4bT2J9H9rBku7b5zJiu2k46fu1pYeKQJ9a2PuhhZnZSXezTxrii7WnFzLDXAir8onKwLGeomu8MUAftmgYF",
  "key37": "mw64wpyScMqQuk1kGoeY5iU3CNtKnGdQLQtjgCFh9fc5gJjzLe8nb5ZTztR8R2FGyEam8ARAxWzy3xdfn3nxc8S",
  "key38": "5CvqVVzVutxKmn4hZPMny6igEuZxpoA8k2Hq7YwZaVKSn8XzdMPmErVpLdFP8Aeih32MkkWxr3ciLz6MrD1mktFA",
  "key39": "3cdvWD1s817yYJ1FQkuCxswf8sU34yCjhcnSBYbQcVbnZP3sj2yERDykX5Mje2FMPc69viwggcMWZqaYrf6qtQWA",
  "key40": "ALtz6bRKWymkbaxwna65q4BUsK6jWJCUiwcCstErkVMEinoCFu3tp9Vn2xv9Ag9VTKToMfApBqVnXBmhQYKtVGs",
  "key41": "3PLVpg4w65kwsxzYGJQzA8sxfMnHDhfYQoV6vp8yJtTgFUTjBHw8sf6cBddfcpJP6Ev3iyxbdX5x2aEugwKmMsqb",
  "key42": "iddDy6Yf2k3UnBnpUx12Mco2vkQR8BhHEbJu2EqK4WxQC273sMza9KE9KQkphutcjLnkUUUN84Xx9qRdUy2pL49",
  "key43": "z5vwiGEUjKPrBiortRDVVdE2um3hq33RGQLW1BxvguNtUVQupv2tPtgdTGwowBmS8YiV9VCDM3NmJczpcx2M3eZ",
  "key44": "2rFD83CM4JhJ2NGWcJbMKCFtbDoLGcqHgi132HxxqkttwZpDkz5T1QgNfBXors4sEac5Exs7fcX9yJmJvi9zmvC2"
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
