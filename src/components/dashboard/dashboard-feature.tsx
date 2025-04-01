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
    "36HCgcwM1zc2oFdSnNiq5kfhFFVVDZCyngCAscrhdSp9LYjWzZP2wMwR6JhqKKpfmh2JmVHPDmyQ61HYJ48x5VBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4rPZSR51TuYyMY3eSSv3oJP4B7AVMDnEKqsNYrfBq4wjgDQYNhcAzYpQ6cZzrvQZ2rRQSc5gSVB4zgsbg3XFD9",
  "key1": "39vVM9EHZLqj6XLYx8mETtbdvfaaxvcWPrpuTqtGd3Uy6g8T22XCC17UGx5wS1BfDe8XBQ3FbMCd7YUrRyYyRUD",
  "key2": "4XP4wUBLdYSfNV3gjbNV37ki3bxucpJ2m8MCYkrRKwPpaXEYCjbgyYcbT3WzDDPiW6eqcDu23PkuojszazqcF38a",
  "key3": "3aRBgbPCUxWuKPEGY5ZvdV1Rk776QCC9rsmSYiiDrg4bhUywjvPBDDEx8JrTyWSzgdif3rjnJuP2aDNHGJLnXuu9",
  "key4": "5245zJqnEcNkQ3xBCZxCc6p6v4B8iQd9jadCQsQMTVauPQxvz8ruUbFh91vpDnucTmHAq2m8DqmGUEzErJmBGchD",
  "key5": "2qCfwAwEWD95mrQhggDei9wTWcKCDpSadFPaM9RjzShLtSPmbxcLZDF7CC9J4J5V3DoHe9bKhBo5udVHC2t5oAAG",
  "key6": "3PJPpGbWmriyAe5QtTpimWFDxYuL1zVzza3GJ31PEb8ZAJ3DDzemuQVvtNFT39VsogzJgD9e68efUwjUF71mHeqA",
  "key7": "3sorP1zrF15LjWx3FNcVnFXUcj6X8fqKJspFF21TVZ52x1JCPwrXXVSHiXtuYZAnQoRxx8GLJCpjzQz3G3BfaeQW",
  "key8": "5PYP1RCxgLTch2MFJcr71gstdzrEW6jdP2e2ATZjqFCTUZAy7BF2bpPvH6SLWbkCFE1j8XPPxaC6G7N4v7m4FVgE",
  "key9": "Ewjgptpm13hsFQAVj7juhADqFrmFBqnMXWgP1EoUB7e53g6rBBfAwACgj86NTG1ViK3rFtHLUtTLPnWm4dmx4Vd",
  "key10": "3hVm78wh6g1CoUQZC3wzPGyyzJ8RVCYW7GXzZg5P4oUXNpZ4BDoMpToYZ8MPxbBsCnHKmWwxcS7qmotXbZQB7Sun",
  "key11": "hVqbWqtmtRwVbt1KYCPpBEfSNZr7KKxwzfcFtrJZQN8SrjB6rnv679s2hHFpY1eZSYDC7ZvAgbua7V5giEHTFe6",
  "key12": "4peyrerpUQDXKShUm9a5ZV7bzVZWAzNa3obo4NxKCeG2mbyVEV9FmrwcVqbKLsZKwiyLsYP8hcg5A2fBSQsin9V1",
  "key13": "4PhPSjseFhCB8AGXXwLPwukzbJaAbMVw7TBm2e8HZyvRtHaiPv1LJp3MjFAHBLWqJTbYQB7MC3yaq6sf8cYm3GiT",
  "key14": "4whcJYNiMt5dmmCdtkeQwBHPtiAyfznEGX3jhZeDMLeLMSkKSyBo9npj4ztnTkAWTbATn29uMjDopAYbrGsjBGnz",
  "key15": "AQruXpMQ1UmXMTUhn2ktCpTYD6jGHcT8Dn2fMD6RVkPFYVbbpuUWshpanhJwTodUC9orA5FTdkgU7Soe8HpwpaU",
  "key16": "zT9rnCWTjhsxBHL856vgxTpmJZiBfSCPJitaa1fdMS64EekV4qzqh96zHGwpNZKR6sSw3PiLvvSEc5Unx1zdVsD",
  "key17": "4qTtc7mns5FWKfEkS51bdJGTYH4fknD8BozJYyswNMttfMWWWKa5iawPNLyjJXPMvyDdjUtxL9213YD9775G3gC7",
  "key18": "3QrwbR3twswW8FTiWqSooBgQuEzGK9PpiMKpLSfeaGSYxugc3AAQZuosf2W1dDahgB8UA38E8VLWCHckRf3vrrLD",
  "key19": "nGyUCq4sBtoxG1EpyYCf9H6P9qVR7kgg4cWmc4Yh63dHhTrjgnVMoYnjPWhFpbX5H59Eayg7fX1sB9E55Z3nKAs",
  "key20": "5rvcefxaTSEe1seDhGerZkybyto4eGpSdKJVtsi4NRNEZckY7JcoHTULmzvY1toVzB38YBc9uD6XLTFeicbwk5Uu",
  "key21": "38XyCxyFX4GiZFszbE775G9qCs6WA4SBYsiYkuVRW4UpLd54WdR2PhGcMX5NePurdhn42QHUzkuTv9EqanDJ9wcp",
  "key22": "25cWD7Wwnb43Fr4N5s5HUfazV6SpkxLqahQBsQEkC9ajAY6DC5rpxbiyz8hYwA9fWguBeoePFQUK5aLHU5FANjNc",
  "key23": "9aM2ZPWS7RrfkN8iEdkABEusFSqMG42k8nWWZ3ZdQ2YhTDT3Mdhch6JmrT1GCVtyii3iMFVbBS4buxXi5sqYMtq",
  "key24": "2EBF9Be6zMgAtKAdwh2nh2bsAUm3s8AsqJZbBX2Jcgkz9NScQ74qF6LdJWsAdY2LAvFkqkjT1YjKLkRf7sYbUJDu",
  "key25": "3Payr5u5UanXRACMTMBKDTGFqaFGDmYzdsLsK4U1RGBtRYsop7m8jjnaT8r3cbVXrvL9ZCV6h371e9itnYUVHMYj",
  "key26": "5pCbngWmpR7MpnW9fKVUaYvwxZsrrScBT7bLGmeNbtnadDtzU25wFvP8LxswFeAf8YBEi1aja5XVJ59xYKCrC8Cp",
  "key27": "3D2AF8hQca4dn8uroFmjDCx3hT5feZE4nSi6kgAsR5MpkEPBa3nbW7d9Wqur3x25bDphrpQpeNJeVkCq3wXGBG8w",
  "key28": "2aFieDm2eLoeH8ZfVgMG1pKHtQt3bcVaU8fUuEof7HPa9meqoGjyURyeaB5mFkVJdFTRme8WiJMmEUbLfQxEFBTr",
  "key29": "39zanMbzAVG1csUASG89unP5hDzfzCRagNNLneHQJJKdZML8k4kM1FDkYw5thAp9sZCMcB2VRbr9q9ED9fcuVsP8",
  "key30": "7AwFS8tgTg1JVNNnV9toBfXacyE2oBZEUeMUxJKJdUWZahxq2GKGLEncMBh1EhGBMvqBN9U6rAFAQcUUYT5XavE",
  "key31": "4TLDNo9xPvcWc5Tf2Qj8q6vPPueiWS8azkyFpZ573SfrcVKfMjc6o87Y9PZCAPVnMVvrh3aRYXLT6Btzu3PcJk7Y",
  "key32": "GvAdsogEyuLrD78E2urUQsBy4Wndf89M4adLYGLWKHzffd4GSYN9Ag4GXXDkt1B3vo69xodeFsRqwi19uPDEjMP",
  "key33": "2TRgrG5kJYNsXQzUwwMP7zuNZ6f6uASv7jwe3H23pTCr76m65vpDZXnu4xe3Gd4qSQgjoDWtnshL7d2etZFd9hAZ",
  "key34": "3YtX4vgNx3B8dYJUEUFASVA7UQd3M4pGU9k77Azov8pDZwjsnw2xnMWF1fpjFzCWyXgHUKT8jG9rRpCSjL8JiEwx"
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
