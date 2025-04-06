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
    "5oTsUk4KigmGWx3RBkqiAqYVLk5mcDbmDqFeeSY7jb2SkJFLre5mFX8anQDnCogvzoMNsYva3FckTL3DPMbRgZPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kxouXwhS4zyYXCsrRfC84AyCFDnJnbiFHnPC9rPjXvU7LTnZnjyQCaNspVxpnNXmKS1hB96CeTefEpXKFRDJD2h",
  "key1": "34JeaStutnBZ7CAmnFd4CzaJa83Cw1RPd9pFpzg5uMmR6t74PwcJMcQu5bjvmqDbUHnYFvuJEvZa6nrA9YrKyc9v",
  "key2": "5h9UzzaixELpfzdWzZ6omkodp57dsBUcKh5ccrDcQWQ3XVMTdgGYFjJBBznyfmqXFmqB7URyCpY1m1yXSzNPJx7R",
  "key3": "5ovLYKHnjHso3h3ZaotHwYHn5SmqEvMieynf1jbCWnAEVnbkPp7TW837xYQwmAiApLdxeP9cTbSXHmMsq6efv1t7",
  "key4": "2dEHSmri4o9jA5jRwkjECm4u78W9LFTdF4fots8FZHbM4wi6PbASkRtsP7Z3TfJeqmVp74NSFYeEvpz46jEn1p3L",
  "key5": "EUiedZihpqaUUi2h8jX6wPMCibkTZYdLkqfCwyLeysUzminikvsjeZRVH95bUsaiamuaXXdkgdEGEJ6ReDLVRp1",
  "key6": "TV7AHg7Hm54kGBSLkUnhLYSsrp7mhbZQomz4YvrNJqhfGywmi7vFH7tdfHTQYyxFtkMyL1gqaFgM8anCPcpwcGQ",
  "key7": "4dvFH38jsUY5E9EqzARXxSW4L1PQKxqnPe1XJ12xENMR5TMWa5iZLGjCHAkYh77noyugFKSNNrSB1Fj81LeVTt71",
  "key8": "2CWtFk7C4TULg8Pt1RDictsKC1kFqfHPa2Xe4Ux9CTL5SLEPE3VkUPMmBZzcBPZN26Ei3byiSWmAKTbhcuFrtmE7",
  "key9": "3u77Vca5Hnb7fWXgngfvoF4QyxLPAWVZvtrs3hGUwh6ypeDY3HpFNfkHMKQrDR9Ukiv9PnXLNUFyUFXVEHdJzkt5",
  "key10": "33nG8xN5BdRWfdwoydgTUTmB8ChW7QDkjF36VVJfYcpLnygr5BQKeoiSu4h1eQ55dURBZBTxMraEsBAY6DNck6BN",
  "key11": "NLueS3KtNBdoBo9ReNR5sHM1HdLj7env8YVGdgc6pZBPzpCkNxvpHU7NCGgKyhXPZfe5eqFY6kFZLLfH1WpBUDX",
  "key12": "uzitXFy1baYq5HsDepGgDvDYCZhUfaMhVhb8M5fGdTg2CCA6ECpHbhKcw5hZ9fQaPHYWjYh4JUWgsftFpuGXoDR",
  "key13": "5pTRKLVYjUXFmwumCVfTZPQneaViXtuguhdAKg7s324naP96h1kw2wa34WXDo6Bv91RJ8x3pNpBQowfV8o4XeiNL",
  "key14": "38E9R8NPe5PFgfVCPzLJetAqSKjzdn6DjngTdQfm1BUuFnLotKpKsQXBPgV64Vd6NSz76U5hLb7tzTCVG6zrG1HN",
  "key15": "4Z32ipJFR5bEexkHwfoM2PPKiSYRHfza7ini6mXe15PN6qiRSB84sHNEeKdJwateRnFvQe4FXyvs5fHyfggJSKTh",
  "key16": "4ALYp5Qqs8mgF38uTBwugvvCBbfvVQNmfr8eypLtvtmeP7o65u1Z97UJzRG4Mqv33KPW8DFGPjX64i3TnGvaRSnD",
  "key17": "yPi6meUR2SmpGVdFwsRa78oMdgqvqHYXhC2VgKv8t6vn8Ks4eGA99YdyyVdt42g3qSK6ejURRYx6BKxGHsMY4LA",
  "key18": "8d7uNXdCyqHkV8buG3Gia7WFsDLnC31dkszFamjZyd1By2tq6o1Ybox6tCs7w3N6oTHznXMmb58EFfw1HkvECXf",
  "key19": "2RubHbHNw3d4NPsucroXrCsTZsPm8PGum5FZUtxT2wyv61PPw941znJK321n2yBQx1X2BxdvG1W8Dxj4Tx79iR7r",
  "key20": "43gi1mWvXkTU8aiiFXhc1hT5tBTLXYCbFUUuZpBNdbUHbfCSpmNijJ4b3K54UbbBruCcQ7DjQLvtmm8AvLmHCzV7",
  "key21": "DHzVmgq8hjqLDXCuop2DSTaRkYDj5JGJqB1pikoL5tyqHG9KY1K7zyveuaB4voouhdVCdXim1jCWM1qwJFPHbv3",
  "key22": "3vKjkvDcGhmqCCxAmjaX2NeP1xUHb9GGuRwxP7PgXhxteXqpt9uzb8iMHKN11SxNPbmDmurBzVaijxN8HGnnWSbX",
  "key23": "5CvReRGD6YzBT51KnXXMRbiwmKx7JHFAMnXZapYRpcV3wvYjC93GJw43Nvt51RLDK4AjLGaH4vm6NBpR3u3n6dd4",
  "key24": "4PFFqJzRMjHnatestkivyNRSWwiBat4rV8B1KXoE6ju8uMFTrYFxtQzUZRPv1vrxCHWbUkwPhum3g5XXtKcUrrVS",
  "key25": "5UY1hwu4tjifdBsHwBwkx7b13Z8qs5d53X3s7r6jmoqjfMfQBUK9RpE3o4ZbTM5utcmZ47JwKMaPrxCwtnyMY3hq",
  "key26": "QnqfLiQEykKCeWULGbFx1371zfqkwk6DbACiML2qU2KSBh6gun2sJXcQif6DLVSgTYxSwBteYouYXG2t3cr6vU7",
  "key27": "2QkQTyUaaizS1EWNk82BUYBn19vQhVjNmNkqwhJ8rJp3txbQFFLre8R2vBSY2EWG3BW1NmDHQ6zJ8PykzUaTcjed",
  "key28": "3KkfrAJx2qT22G9yUMYEJELr1VhaVExBG6dSTZpLJmGPkngkPBBPrkCpsw5AVKsPAUxsQCXCgBGmgny2MHKzbe1b",
  "key29": "2e8xE5CefejHuCwEsfKQoeM6XHxRdC4KsKEVAzmFEoFkg1hwywbBe4kCzPVgC3oyq5zaWvJ4s57NSkiS3oxd6kGH",
  "key30": "64HrvHRgWEHfQeD5sLMWLEY4L3geYk6DVpiB99DumBdSEtkmrmiTZvYvNvez1yeEcBcS1RrGZykzNwwj4aR88mCH",
  "key31": "4TuhXd8wFTEaqSDd4eFK4Ee9BBq8XtX7o5yKW6W3w5mreDzrvgDqmKuZRVZPa5Qw3x4DAoxDewogXjjbA55dmg7s",
  "key32": "3Seu4Ehew6pms6Q11exJfAELVYsotYtnGoD8xsDstmHXk4S65NqW58Wjxf43UyxDtpLXevVdkKP1JTtCcMhSJLih",
  "key33": "4cUGrsayiWCLbaV6sN9XHD5kLTWbfTjnWUpN3gRMMbDT7g3ib1ubgJGqmZRFZykcwruZo9HaBn7TgD8PSEuiBs6U",
  "key34": "4uWfGjpp4oSMmTS3fHKND9YeQTxwR8GkjrWoDmLD3u1NebJKg8xKoY2WCh4Hxc4orN9hdSpzC8Z1ucW654R5PtQE",
  "key35": "4jEhopYys5uvZDiyyLwHMkczNKoaY16YV1Y6CK5vHWBC75pMam6u8jgt1kozoEEGPnGv4N87iVGFM3W5M1i1kKHu",
  "key36": "2wB21os1KnKYrC4mW5vE54hbkSnY4fdZfdtHPiMV3Ac9XXx7DK9WUg5Ytwb9MSUgitBbkRojJvTmGbcTsx6cCCFM",
  "key37": "2cUhsr8iVguYzgc3dZkMrDWmnSEmEue9pdHbrEVZRhhCe1CG7bCB9rjK1FvXqyouwRc48VVpESWQzgFbfvgbJ6mF",
  "key38": "4KUhW3KtjjtALjbXct94suex5R2qiLoyG2m39X52r3DLFfYGoGqqiKUMwbvntHMMjpozpY1WQEDvzxzdAniqBrbx",
  "key39": "2LkjQRAmBHj36o9AGLcBvWvztZddrKDxx1TqEZU6tX5WPWrKv2cyrT4i7KiHh7rLcGfaqB3n4cgtVHbMnmUrEgKh",
  "key40": "3CYueq7Muv3k9dC8PSk3HABp5JydwJsPMjgMYNaopEMeCDK7wPxQy9h1iCjuTqWqYmiHfSNe3aBbz4GTWKYZ6YHN",
  "key41": "5vrPwLnoxm6YYyaWJRqgLSg5iioWBMniiznTbLSfZPYDZiKhQWprCY4rfUWCfmUVGXHCb55VYR8LVo3NFPzKoouK",
  "key42": "2YefLv5w95FUBeFPt1w6WYdrYWuvWFD4MsGb7EX4iLXF5HDBbamkYgEAG7aydb6k7sK3t9343h2mgfP8ayXGPTfh",
  "key43": "3DqML5C5tDriY9P9nrGqppHz3GpwMNbYQkiyaqdRoPLjJ8v1emFARmdvtH53giTkt65Fdu8Ymg8F37yW8s2E3WF5",
  "key44": "2rans8eXPREp8MXM8LBg1Ngb2Wvj2XptSp5mqR7RjE7HcBwFLgsVf9Sp8EtFHDjaqXanHzX4fM8sE9eRhb5nbx9P",
  "key45": "KzdMitT2xK1TCAUbYKpGjRUHZquiFJroNtNr7ewPgNo6pwoH9U2jDxZo2aYh6jN45Bw7NuZjGwkdvnZ8dNzv9CW",
  "key46": "5QyLmiv6XbNkADFvJLETDPw8CqZ8Kvhf7quqj9fLs4V93gTSGBukveRwkUr3PQ9T6TmzfP1MrsZTe2yaUjPvbWEP",
  "key47": "Jsnf9bje3TW4b4JRPf11b1jXfnnseMk9NejamAQ2H1tLwap68en74NDmu93FNJfKFu7SF9kFtAhPHgSzE6xWJMX",
  "key48": "5PHArizs4LPMgQp61VtdxU54Q5pTB3X1WcveUjU2iYctqVcghXc6KLb6fahXHhRKuBKJY5YWnRBk2isVPHxJ89rW",
  "key49": "2vyiaBnNuTm9GxNasRu2YBwcG9sbyFYbHsHfTJ5r5ipNUrpECdXa3p5LQaKTjd9Jrw6X9tS2osUypV14MuoxwUfZ"
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
