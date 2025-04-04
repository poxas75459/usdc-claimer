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
    "9Fvuo7QotsC7PYk1KRU7cp4fnncjgPuLGSYSyDtbxkSZp2sKameRfCvnmbf6C61XfqXaRGJiNFWVgiVY6GvcyvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfCUsmyiXtEdKpDiLfDWfAKQGFiPKkRfBweH6cRYLKKYoHuwrfEwZRNo9tuC9rqhjm9vxYrsuD2nzTiE9i16Zif",
  "key1": "kttyhSAVc3PoBE11JZHvGo3TTaky1AngeHDfYtF3XpTEnRe43GJk7gQcJzPaFZB3Nh6yhHxHdCCxJDVpzwk7qkm",
  "key2": "2Asb2zjhSik9rXdQBVYxeu82Cnn2JQBPbYyBwvibEet6q23oR5wSrfTBnugtv5vCiJApCrfNU6AurCiA3zxGf4LZ",
  "key3": "5qUdF6ddU1Qva1M2gxg34GoCLjztpdURUkAruxL7hNX8XcJFTebXjQWiySUocmhogFSWezKnNruUS2yVo4orYA3b",
  "key4": "nzfvA9rhpJ2CJJetPBqwfHM9AbKgDVLY3ayMQ1n1dZ3tbLB9Ec4NvjkhbZPU9bEMAvQCJAVWVw3ysRP679BuZim",
  "key5": "3FZzLec1yi17NTbnJ8Nz8kvJdKfiBFHa4Bk5EFuDprvsEBQiM4n7R7VV19jercBUkDp7wCkr1Q9ZVjq6D4436phb",
  "key6": "31bMZHQ9QLbzp555nHmmVWd3hyDG5NJiKjfebV2nzJAZXDrvr6apZd9RiWvXaPJDuAVNYthcME8uzFxrxaAkUS45",
  "key7": "2QzHptgT8z1wy9xn2QrNEuoLjjLpT2QwYPBTA1YYfVDvx57GznQeTtiKwsJfMCYdJvQsmVCmU39bc1b2A7M6E7bR",
  "key8": "4WDAxNdeUYM7fb5R5rgviqZxFFfJjcSJndNWzJR9FCUqajeMWnTcBkFcq4F8fZ7tsWHEnafgHh2afXFrymSXEzjQ",
  "key9": "4WB1iz4EJzkzXGWjd4RkDpy31pfVuihv2avbFgAreGhpxGgGZrJxRvpjLRfirsA3YSi6pYo3UYxYLWwiF4NLxCBF",
  "key10": "4sewDN8WctwnUQxWJ2n1thqdwnz5KEzHFV9tSNH5zwjZvx3UMgvNCWsfZqMMym2g2rHPqqdsmMpheRBnAEXNMhzY",
  "key11": "HV3nmuvW7s7AX3AAK6ji8PWAtpUKqKnkCWvyagsevo1SoBPUPtbNNULtUN5c3AoREzfNamy7etJTqDCtn4s1vEv",
  "key12": "5Q9DA4xcwrPjJGtUyx441Jv5fGDFZNSCkiEFE4E95kYeKg3c5RriRcG3qML9Avs1tK44SuBoQAT92MoKekhosk1R",
  "key13": "2Mxhcrq4gfkp85xsuJ7EBGGrULZMBDR1S6PYTEvzCfyxmwPBG6EpYtfdKzj4xR2hSGuhg6ZXLhSNzDphn1qS65u8",
  "key14": "2ySheGSwWyEtP4qkNNoBzpCQju3JssQ21CdXPcBfkGqJqf87wzhma5C6EUP2iQGZ8GfPHhUVvRCiknX3kJipYd5n",
  "key15": "49C9gt1GkkzVG53eLLziBeGgQQo3B5sxzTFjiuGtNAML5ja5TUTEu9bKMXdnTrj3ZLjK3CcSymjt74ZCP9Tiz3Ya",
  "key16": "5p18G7L47MZqRVWg4jmk3XfHTokYjscJLSb6M2cGLErq1iri3XZFUXWUY1Ngg6bAyb7Vhcmic3XmPJvbscpASP3G",
  "key17": "2UCEknpEQHyzLzX4uN8BoQAHu72LKsh46Re1WZknXAfpQurV1dwqV9nXWhKB4sWtFZEykk3y7VNdK8tRYm3VxMhT",
  "key18": "2JGhYgXxaVGLiusepHEPMbX7B2NdC8y9P9mCKSDV66BpGLnSVNw4etcfuA2JWMgHje76p4ZXt6wjuZWbYJMoLDeu",
  "key19": "2kyVw6Ri7cPjZzXCGr61F14eR1Rtzai2TjaTWJkWEkkAnH3J59C2qFP95mWqeo4mvH2D1rPh3fX7YnSxMWYuHzdf",
  "key20": "24q84XRZg2hBW1LGRRNo8p8vb4LKZjKi4eufeztwuLqGZeCwjMeTT163p2SigrMinaDHcF77jHwsmToDinWBrzYh",
  "key21": "5GdjvE6D49zjbViwqucybUUng7VCTsNpM1HqSt51Ck7o1M3GHupgPcF6CrSzkpUzNL7KDr5StbNXfvhDGXu7YH8g",
  "key22": "3U7aJJziigkgmG27TESe9LnuVmnbJvsdLqxJqaCc5frsjUmbTEMU5zjAj85CYgbkkPXXb4Fn3jVVn1xy2tdzJpbH",
  "key23": "2BRAjCLmUiQDpgsPNW2SkR7BA6d54ibMRQuYDo6v1iJbTqEtjxDQNghrLMwFZNDfCFLkjePK7RH9i4yuGscFL4ia",
  "key24": "4yy26CpAKKBHFktyoqv2W4N2uy6mvYwgNHSujaYVgboHoKMJn1QPK8AGn1iHjhV7ia2jn5BrTp4XQbTpEL9wYSdp",
  "key25": "4KUM9EnKqhuYpHGqKU3pnzZsGDSw2hEdzs6jpM8T1EEMUMDDnNCyJDrvzA7LcCXrN7Uv4Lfm2Qb2HHb9apraPSSG",
  "key26": "4nfb1UhGPDEWuZFq17myZLsKwE6wGwcv79mExU3PsNEYRCZiiNWNG86R45R4hnazQaZzJf46CcmEUqrKzSWSyDWr",
  "key27": "3Xw56oBqm7zGz6qNjpnKNMtPqaPu9xMeSNwK3h5g3fCLyoLafxAVysrfid5kjXjcQz8C6ikxahkNALq5wFpUw8g",
  "key28": "2XifsVCoiw5momwB2JMJtYC7Wt1MAGHHA7JmkrokF3rY1jHFn5tTDDcZBojpk1DKeVNPQZzFTgUqHEjzChhVJGtm",
  "key29": "3ssjaMyWcQDA7YEtfDWQLsUJ7Xy2m5k8Hwk9sQp59Mf7H3zy4e6Hv684EKKQhJLqhfruWwUoFeeuwMyXKDoZGRH5",
  "key30": "3QHQGti3YyiiXPswGxRXuKZzMd3DRFEWj7LaUHKEgWLoPTkmndvJwtHmAdDryzc5v23cUUc4r4HoikPYoyYDfx54",
  "key31": "2USf79dCBzXxc9bGEjBqz6QoPghrFas1WrUjjAm7MytXBMM9zTEBBvr1DwZKPqWpANErK6sdAvT6vpC843E89cV4"
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
