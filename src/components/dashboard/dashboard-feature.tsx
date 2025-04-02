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
    "BvWvg27cKi6gQWWMuv94Mw5smKmAJqCCgrnzGsWnnyA83ZgYFddbVmy4VTVmo9pFqUazebCcgRvihHTwZxe63Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBVpUMHYZtfEWBvP8obaw72RRT8eLR7wQj8aBYKEb2wzorzYEmDT2PMSzGMLGcWHHPmbkqvEDNHZi8RFEjpZman",
  "key1": "bvpGC9o2NgZpciaFdcUcNsqp4zXdoiSHzgy1eAWFbxWt7Tioj59ka5rcLEtKUDg8VmBF9buLrqBh4rrs37ongsn",
  "key2": "GxKepeWGi52dN4PAWavoEUf5mZED3DbchPTTV86JEqUMZNQtngMnNz3RvErgAKkChfzgFRdDFWRJ6LiSwYzz7Bs",
  "key3": "2LT1T4MQXttXz5GZUhQnuP1KJi7HJD68gcqSngpywBjsDqea6ADrEVd7rS5rB9MbfysbBmiqVcMPEjJFNAwd4KBi",
  "key4": "23diCfPv2TfoxnnSk4woTAia9rXSGxLyM8eonAKrcH9b6v8XiL5ias82qBCY2TUq9o83AY4v2MkdZ4Etq4kexMSJ",
  "key5": "41pqjRD7kcVhcLCh5fEkVGVPdD5Drg4oCQQJWxgywY5ZoDVMn2rcjcNp3xe81jB1Fp1tHZNuxJdHYgdLy9eVUEgw",
  "key6": "5Nw4G8GTUzyeY49B1KTUW18UWUxXftpBYxibfLHEckUGbT3rZX4F92tXhdPTWeq2uqHVxonSNkJ7D8i6JYkz2tSK",
  "key7": "56Y9AsyPf7tUk5yMz6eya1BGSWx31zXZGYDrjBBYTnHhzP5veik7KG5oaptBvFg2MpuwT7BDL7Ge31QerWG6ET84",
  "key8": "72QuZgge2MFc4mEXRMN5zn4wrcnDCXAXuxHtRX8jbphprrQuUrb2Lt6gKjEVw8SoH6up15BEbnEBn7R8LqzdqNF",
  "key9": "5fisJQkvhpou57bBTkuqF6dnxZB686NCNoULiuAXQLunDaFJrAadyxTUT5yXJzBBfJPpbCXAZYEjeWVMB2GYsAd8",
  "key10": "2deeAwhZyTib6REDfKZq2LN2cv3agmcwWFgz2GQAFpyFtMi3o2zDi6kuUEgHa1r6LUsgZpCSBeL1ko69AgzVXmja",
  "key11": "4KQAxVbJuxj1J2iPkNpY7vZzH92ZtZYknRE21XqeFCzUZ6i4kvMZe3RsVuLfH1vMo9dZ4vhFQ9WdR6SD25epms4K",
  "key12": "3VR4fx5NEhcU6FrV8Bkq7bS8s4keij8SEhWawRk65KBDwxrzzrcPJ3Q9T3Uu2Qg4eNaqX7GqgjTqZHWxDfucYEt3",
  "key13": "2bfiuv2tgbFiEFbKA196Z6gPGQgwT5w1qh7rqfHSPfgxc5Gpc3RV1L3AyFx7MnH4pYAv8zpxUUeTcPe5DH1kEED8",
  "key14": "h2JcaQMHTjjcAmkHz9yvbgRYbcdZrhmRnDyXRyiQiKMnFkDhDubJrpvmK7rL1fV3EVAGJ3hb3PHhYeAPyAdrhyT",
  "key15": "3V6ZQa7BJMrqhEs4DF7QqokNPByFDWSrxkcjZx4TbyTxXG6Bt9ffpsoQvBkrSVcMzkd7TJ5ApqHrzW7fMdWifaRP",
  "key16": "4cJVP7DnK1g42LTL3ahRNuCUMfKN5JqYy7RtgbXVMkWQw13JaKdQyHucciJNdmaBU5N8G8Rfo7r7KH9hihZM76gk",
  "key17": "sGK1zroGJxSPXcENHt19xqNf4ojMFu5aCBGjUBNBuK2yTSR3uoR3oQnAgPRsysVdT7uCM4QfnAooXrW2nYbGtFy",
  "key18": "4dcXaVQAVk3Q1t5u1DAEdskKJms1TjdWBy3wpHNuAVixbkX12GHY5BT6PRE1kg8vAafYrBRPAhYDumt2piTQUgAB",
  "key19": "4kCHiaFpzPGVaULo3LNet7f3FJZp9vYHqVQESyXvH132Nk9xDC6UwfcTwRbJBphQgmuKJd1tZWvNenzXWzq9noxh",
  "key20": "4JvwjKUJ5Ycbc2YH45RREzMHd8fNTxxqbD6DXwqc7rQjuEDfiucsxbUutWUc1QxRQ34NbaKGAmjUEVaKgf6v2RZ6",
  "key21": "5RAaSMzPMnv7BnPTodMyZEZDWvAKF3zLneTVGvKTCFsLJHeveN34nJ2sdGrUQaWX8m8o8wn24rcdNv9gm9VeQqbB",
  "key22": "3he2ahjSu8ysSHmRbSvtvg664KbCLiPWXk5b39hutxKYZHUzuSr46Vav9mwEZ3Ev5aSN2UqGUJSczmk7biniVAcN",
  "key23": "4hKiDPV6CiLYrWeg8aGXsWEnyoAmBKo3Lkn97MbmAkT193PryGesxRoNyBL8j7XPd71q9zbyu8BSw1R3bc6P2Kwh",
  "key24": "3vMqct5xEtNp7FYh7MwqjmjNZLYQK1rTuMh1uRNqKu3GKAUSrb7ygpRoWgeBeCLLKUuDtAMjM1TvvsxbPv7geZV3",
  "key25": "2QBpye6fJk3hVr1diLJqMgGh29ikjk8dCiPnx75DRKCRkdRt1mFGkABJtRhLWHGwFnxWDxwnHtynDbWwRkZYXFya",
  "key26": "5xCr59HWKofvMJsQRXCGa1WsLvKqS3bAr3zxVqeVaDeBWr6TX13g1ycz3XTZ7MAqCfVbpxByQ8qRqLJqSmo4aLhC",
  "key27": "4kCpSN9BMs9bzH18nBYLdymEdyNyaxQRiJT42T6HE1qqG3qTQvx6UhKXbqbq8hRibRuvvzqxrebu1eZ8cZ3n34Gg",
  "key28": "1JgJDWZP3DPQfzvq5hibjvWzgX5zW5uDtAc5Ygv7AjKrQgpYYrqhd3cH8kVJ955Brer53nrLEonEbdpgGLVxqW",
  "key29": "24pz74oNQsapCdGH9nu66CEENh1cscPSYPbD8TeETqNFNuQSNBZFYjpKQ8jYz216sfzxSWpMriZ1wEVZW1tD2Afn",
  "key30": "5xQNhv7Qv5fHVBTBKANpJ8drDu5KV6rMhvk9YNwNigYvwDkQaPdnSnPR1oxFuzCj66e9rpRSzHt7prRgcpGjDwsv",
  "key31": "4FYXAznfQb5UQuXJNgavmzfxYacmAb6crosaXy6L7TLtwWj2wWtvTDk8qh8kJhkX4xtnciN7wLqiCkCLFETdve6z",
  "key32": "jG51HZu84QTH5PdkpqBD8kPWeJgjwS2bmVBZNn9rEHwkr8KeYDWtu4vbtNkcgY3sST2d2DfdNRDxJBVGT8j5HpA",
  "key33": "4qAzDPSP3JWmXdGNdWbzXRPqo6VuhX6TB1HwvzezxfFnsrXSecC3BhmH2TF35WKnU4m4P1o75qfLrNToUiNcq5fS",
  "key34": "5f8W7LbgjcbfxdwouRMtHYz3jm1y9ZwxhFvRqZbtWekRpokLxGX3tr3F8eHF3yAHt7AywZP7o4trajD27wKgE6XZ",
  "key35": "2xt3uveor2WSPhhrUwu2QaBYrXkmKCQYt8d2cM6NX1WefiPEgFhnxEsnoXnR4sBsmc9aeKLmKZgeA9KkuXBxdsHt",
  "key36": "4jg91LXLevrTCu8Sf93YhnBoBpgwbGSSbzETmQbTBN27oWDFvcAypX7MB769UKmCea1rFKVTBmwN7bCNzwJEa7tc",
  "key37": "4FMPfs4t2D7kfig1NLQTwVwH1cbK3sKjVt6q25kXrfPtrHh1V9yTBbU2qnrirReNAxpRJc3wEusFxq5DPkyw64Ze",
  "key38": "4PUSsu2yhYmqsQV6GweYudBnz86cHNB9i7Fx4Z4qqf6eVYcMx3pxvcruN3ys6kctAeiGtr1yNKM6mPNRshPu9Vam"
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
