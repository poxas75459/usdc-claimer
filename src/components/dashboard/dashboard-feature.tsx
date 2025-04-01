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
    "58jBbPH3yVKFVw7q6btis2m9h2Qbu9grPJ6Le7SKzmgdTB1ZNZyky3aBEDH2mG3eEHGrS395RLsvPvJZ2AFmu5Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33z3qAasjVhSZFcvaJZ8pzTF8pK4pXXt3De1RXwzC4FftoP35pp4deQMU6HdSoWxn2gaKyb1RX9v5kmu9EXz6RnU",
  "key1": "TcxtqDXeNKU4abDUDEPixhfp2ff8cih8SnR9fRcs8Zc9N395br2EBnFfcQYEVVmYCCmFfgmKeDXyVQxmtGE47Tm",
  "key2": "4RL4tAoBck6kg44ssLpEdFuMUPbXLnA4NHMKy4yLKaoy44oYrP55Frmz1hFWFmAbi3ffx3eH7ErfaHwoN6xtPZQw",
  "key3": "nxCG5PoxzGLuw2nvb6AcYv4BcCuDTGr1SJPxcmLuXwinMb1VrrDZ2s6Z6TXWorUWrUXij3yUjvNseb2Lnua6VYk",
  "key4": "W3Vw5yyJP6d8JJ9wZQmsg87KXYknBcA73c976RWedoqHEDv4rWoujqwUW6ouUou4yh5SK167CxoZmMVhokp9ivB",
  "key5": "272AcHd9MuLeKy5ePxvFrtYkGRkX7zQLRPae3uH8tDgbnW8WksW4KPXsapSJDpeTRfehrto5Yu1EZZrgcfDCgnzF",
  "key6": "4g18CTz2hWWegTo6q13mmGmGjzs7QgReTWaqsHENLCDte9qAbcFqLgZAQTCH4Z2qr36FrL2JSD5FJEbEaFxfiHWS",
  "key7": "5hn1Ld7k9MdjFBd4a5RFTPFynq79wdCFBtMerni5yYBemumY5KhaQgpkrnfiQXKmE7k6sx6RKF7rggLTwMX8BZ1w",
  "key8": "2DHSTZG4PCcVgczD6gGmTsNoKQZ95NombBVtJYpkR3yeBCvENLsiF9Rc2Z5TpZXJzoPsrjSP8fHoccnz28fyu718",
  "key9": "wzpbrfdreyNJoHvpbeobEca2yq2z5JMPWpPQZbL1XkgUbCKKu4dAhao87wzzpNgZvs68GKDZwBRwExUJSAbZK5s",
  "key10": "5V9VaNsrTQ1cxMTxjTgcv6SqJzJBxNjAPdBqwPfBgGXToiYw48pM8wq2YgCEpJuUTyjkC9SdSCtyMwRun8pmTJw",
  "key11": "3eaVHs7rQvoGzq4ErQTZwvqDKHgwRUJhpegwLdC4ZGuUJTQDCJC5wAi3eqfGCCBUcBkzrc917ku8dkWcvKojmsLM",
  "key12": "4cgDn1baPNAfAJZZMmUs1x512jR8u8bif6MCcBA374iFzYaA96ye7ikiBNMLMkG5GBJAVbxvEV6CRkeoEJWbzKCQ",
  "key13": "aignxyq6VWn5LSNFCFTtfPmcwAJLf2TnLXKqPfK4tcToBjEqAPopfAuM8ZQrENGYxHmh5v8y8VHasg2xAbcKzSu",
  "key14": "49wwykV5x7VkKfKCXKnkpFBehCG8Ubfx9LQPzixV16MkRhYdCQRbN42sebE1BzpVARpq5UZMBmiobCTbD1SjMJCp",
  "key15": "XHBiooT4X5ASJWDTfxd3coFHsxfSXJiWhyzvd6W31RiQ9HDVukr2ayKAinnAzzJwBAumXHF5rbN9UiXKNr3GbnN",
  "key16": "2BNnwBK3sbn9FzU4W2Nk8aFed4n7ctPcXhqtqzbodkp8ELodUsyBDKsKSFoZsLHJKu4U8u6xBwydXoKgYb5Qqc6W",
  "key17": "5xwq8NqmM19wJnTPrfduLK7eSs2H1crJwsPosAoA2ZHiAmuQ3VGZ3fHoYs7QCmLhUcYppT61ig1BGBmoMGRyLnbY",
  "key18": "3w84u6LJW5pYXDeXSFE1ioSYihHXGVe69eUqG1tuqpqirtPBzqVn8UjhHSFqa8WpudcJDWRm2FT6UdKopQ5P8uuW",
  "key19": "2SCUpfQ7Y3V1X8VyHDofhJNMRQeTW2QGZGK9kzpMrQWBz8qtCi7UzVQNPDkYtzwVvfpaEgcAX6LUjaRgJCdA74ut",
  "key20": "5CBPJRtFwaPfmaqJEgjcyh6GQZVcRg4hN5ph7uwGN3x36WvkiKoR7WbvotB6sNdDRVboaAH7eEXYjm54ojbRXMi5",
  "key21": "49Z33qS23VaivVXkAMpHSXsEVkQNeVsQJWRNViFLykKRJ6NmN9PDyUgjJCHVP22y8ov1Qix3LFWGjBRFh99hrf1r",
  "key22": "4RndaoxgSQ5EgnP2ynJYMKHvnZdRYGLZez2aDCh3WaSdzG7nk44ekrsTJJHhcW3atuZsNaburRgKrQz6W3XYwhNc",
  "key23": "9TW9vQjHKGCKQhX68KR78X4CpW9GumUHzvuHYhh63s1NXbjY3YWRZf1iignxbTDADvZKoLou5SDLjEM4Rq8yeUz",
  "key24": "4yvS3KxjCWGUYDhEWf4SmX6qmpwpqmFhR7qQg6Fp8kpZXhBRNEiKJWVXJDKjXvjzxqenC4r5NwSuNk5hXy2CFmHb",
  "key25": "hDzzrV161AG2czcLrPG9SjvY7McKMjTfvNL3gEMisJrQyorcQEp7kiCeoLzgS2nuXiweRUrgXRGWemNozo3Uich",
  "key26": "3C4QV3EDw7Bejo3qUnm3J849BYZ6kmhLb3SbCKbEdELq1t8dKLaH7uSSyF7hfDDM6Q8A5khwZ835o753pzFEevro",
  "key27": "44pcZJ2znZic6c8drVsB3xmUatGgc2o7D8BT1zcuLC2LzmgjdYuXbFGXYTc4DBDh2b91UKL6XY8uxg6cLYGhmfsY",
  "key28": "5prCeMZiP5yv3DXyyMa2JQ7NAHtBvNBMd6LtR2oXXD9wAL24iiJnm4tWhTbr2tXZpgrAbKHik1mVgk6P7QdootvE",
  "key29": "3zjeASgpCDPxw1DAW6q9DoxZAZCiuCmTjQPXK1VE65LLccM2DhoPTJqM5EqNxuY8HpFx7F8gszpyGuNzQ27LWj7K",
  "key30": "2Eq6T83YEn5mgjmbez8JyWEehac358DEBxicAJCpsCLaBpN7SUPzsH6opgDABTPmYvUycDxJKCqEfgDQFA2CvYoc",
  "key31": "2KCJ6adRDZRiNXAvaJawn9vMnzyLBT6sYJy5XF1DHWKDTHeXNmgzM5b9dyd1qk4BMxo4H3kmQtj6FfFzZ3kUe6Yi",
  "key32": "3JmSvWmkh2sjC6BxE3nekmQij4Ft1hmQk9qya7bi2hDSCuCvRTGQoTkuk3ACKGqXJyGCN94VZ3vQoeWQ6wFSx2TW",
  "key33": "4A98Dkhcm5wDo7J8LBnmcFXpYdxNWDXwMaNAEfdytA1CnYumqwQB7rY2qWCSeWoByTYRpY2ZqEJjoQ7zbB6J7kBX",
  "key34": "4AX1ir1Yi3S94deggQZn6SkTs8cvAAas1Exm4SPjmps42hsoT425xjpL7s5GisFYWEfyNKkXNtnoiVEkyZh4AaMv",
  "key35": "2xmofb4yewiry7vjTTEN18D7YAj7UHdUokAggyuAncNjMidde5RbD5P69jTEjwP6TksmL5rsz1yvK9Atnha53akQ",
  "key36": "4UhVSs4VwgstKn8TDRkKfEHLSnmmnqEin2XUyiu92BBYfGj9D65T1zMmeiPiKyUjzfq1mkvc1DPUF6mEs3Fq7hSN",
  "key37": "4AnWc32eXY3c7eHDC1PCnNrkm23ZXmVgZdLPRGCgNW2VGbes1bCfRcgGMqr4MnRBq8dqL6UcbuVxNkq53hMBMFyS",
  "key38": "4XuKsxtJaJcwm1es6qC5eAWv5VVDpnYtUE8F6ttB3bzRSvTzWSJ7H8tEgJeWn3NM7MRUzXsGk5AcjpQxpDEQ1ncu",
  "key39": "3MGCaipyNX6HuwcTVPogkPKL1bXH4sKj4cbGV3RptxUoxgCCAeQKA1kxT4Pbi4it4MA2WP66XDJB9K78h7jjVkdZ",
  "key40": "3z6NR11vP8wju6DUaHNfFGtD5jkXjWd41maMX355EZuW3xtxe1JZgSwaH17zF6rrsHKkaXQg8XjLffg3KD2NAHHd",
  "key41": "QtTZrQyh1eDafG2ranimroaCoyeE7ehzvThPhwiHC5XZ9VjqEXXhg5wApgeHG56L36b9xdNbZRiF1tu3JB7CBWP",
  "key42": "42KBRhWfkmE9wKEVxwWP6XyJAKhAoVwa1bGPBeYjbwPiViTZU67x4vt5f2gNLjdasoT4GdLh7dQVThCzZCeKq4Ny",
  "key43": "5kYHuy4WW62ceGEyGvi75TER2p6ArB77UVUbevB5pBfjr6DJEtZPCcW7NxXQ4gFbi4umAHrx9SCvgR5BfDXYnTic"
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
