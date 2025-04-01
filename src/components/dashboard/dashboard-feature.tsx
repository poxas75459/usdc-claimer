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
    "WuXZQod2gUgwv6PRJBo2BHvGvcAZCm4jcLPBBgwuDkcbAabuaH8QYELtjBTpBbpQr3rDvrb8D8o8XfugiozfzVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MzHTFBGnm4MytK33kgRuMQnMHvGLvGJagr19MV2P7B7iAhynLJK1tnNQP4TFC6BNzq8vuKSwVDM1Nv2b6gTr6x",
  "key1": "2KaA3XsCmzYt2s6ZJ7U26uPJHn6Dfot9rXSZYoayE3vABmz6Qn5qPc5CCVzY8AfvVzZ1euqtezgAwmNf9pmTRRkQ",
  "key2": "4yV35vGca11E184ja42q71W4PSfoJWPp6JN378eFRzuxV89hefDMZYKL67iJkgYfUMG84wxtbp87qSXFmvMdQGsp",
  "key3": "5KnpXkaWU5EUALYx1cxehbkoB8qLzbs9kcmGYk36HAowDRZQp68HegWy1TPVwXoTGkVgAAkLFRnNKpjHYYeyQHBo",
  "key4": "5P8tZaupLWTbuuoE3n88yQcUsPCnbyB7fxdYZsDGzj9vcZezHu1g9WUULMN7BGxdJfkgrodcz4sApxiMfvmAmX1H",
  "key5": "3xj9YxJL6eCcTf6Vc4viFMZfJZfDa4p8euQH5N1p55HNtX19Vw2p2kzjajHrijtDSQTWnHpr8n3nSbpGuYoSZY9E",
  "key6": "4nioNJsmV8e3xoHshU5BJxEeT3FUNXYaJD9Zbsy9yJpKy87rH8eUTVrwHX8gMQZGJyjpjg2zaC84QG9ngqeMvK41",
  "key7": "3rvnuQcdP9ZCFx466TjKvMAF4kqKpyBXwEChC6VrEgbDgKepasb8qCrD2KKT8353ynU5g9K9DmEQub1PVDJAv8Fm",
  "key8": "zJ5cMHDDtGtNeDL9cGs6WXQYfEA2uf7kjiuzAMf4YE3TwNFX9rAkTGUbyguDkf4oFSgNmvH61zhB1FCN7wXxGxF",
  "key9": "4coUGqEcJJG31ixWaHQUCE2gmk9swFEZFytxSr6iiiMZznRTigPMvRNTm9jXzAt3GG3NsgK5RfQ7tyrrE2M4JY5D",
  "key10": "5h5yPCHXt6WU2SVNnXcakb3c4R1XEfsu5AwTKwP89iNSCzYJz9fJVGU724pjEkDTnF6XNBtv8FSe6voyJ5qz81tG",
  "key11": "2CgDpxzwSU8Xb47pTGJM69aqYgLUqbWKgSBP5hDzb4nWZQPvkfdzzX6DZ1T6QqztPhbGJoPSxYdmUuZJnJrVa1ja",
  "key12": "2zY5hkiqAyoGgxgUyPgFA45tgSjU1b4LCicbQkCjydXA2FkvEen24L6g4FJA1dHfXCAvqbvwLCmhCoNrdr6LUdrW",
  "key13": "xa8vR7PZncGRUwV2N1h5pxvw3cfi95JUbm7dimfyz8RKiS2PdtNjSvk1PPjaKTKqVqy8CbA1zoDSn1eTjftY3wy",
  "key14": "2UxQQfseSgyQPFjrjiqy8bgw3A1YUtqM14guTG2UFXLQTpzGHuoAJ7HqxZsw7UcDVteA5faLSwBoHRmGMDhHqBNL",
  "key15": "Gg1mTUSFMea3u3y89CBNSM1mVXRAJryvmTUj2LeEzTpRSmHdPq4kSttW5vttVqNT5UvDfbbPRbj5peRu5iddWsK",
  "key16": "oz7J1KB5aRNqNZpqgsNv3jquip1CpTehMf3SwEVas3KeWecZHp4GweGJqHrWqnfQkQjrmAsfPMyszDLApYqxKeW",
  "key17": "5YwwQfroYog1HnPbDmw69brPsKayCyxdHuo3tii4T5T7x8ovLDf7MPafUYtiMiPUnrM3jMePTv2d4YQY9C18x5to",
  "key18": "3wjjx6Sj35rutDRCLNQZceaJRp6xhS3d2fuHSwuDiNeLT7W7Q12UD3K4Q7ZmYS6i12FE5W7byPTsuWRsnDA4VxQf",
  "key19": "67ki3L29odc48KxSPeF9azLxcHfo8ZeQFYNMm97i1sUqdwa9x6cgCGZgRYYTbUrzJH2wa5Xo8ySkwoJxcyHiMEE4",
  "key20": "58pxydH7ioyGiVekY2eQFCNWtn3xfKJhzu6qRSMnGeF3Bgi8GsgNxYyWqyPFQD4BdycVK9Ec6EUKUwLarhYprvUv",
  "key21": "4WG5EyXmdU52gUFax16DQgV1N7rbCTsjqGcwz5WfFqr3nyGgMTLLiuz35mpUYkrjZEMmZUvbUfnpMQD7rn8dB4cG",
  "key22": "4e4AtjxVCqgoLvjbtfU6faH9piJmNaQ7FxhSmW2a3ULhaRn4sQ4Pn5HW4QE6nKUJbadriTZe4gLJCHyEoh3nfHUo",
  "key23": "4bcEKUthj4xUdLBT7mVjtMb3i1Nc3Tu3sdAxrAjYB5hEs9FjWGC4hXsawBPmPWoyQsUri7hP19zDQEws53u6EEMr",
  "key24": "22HKdnBJf3KXLZc6uuTxSY3jNyF8vEnPBx4tthuvYtNniYnsmCypXKApqfn17SSRw1wcKrNG3gKWGrv7NZ1XqKh8",
  "key25": "4GXmK2yqiQ43WE4AZ8HJgHZi6uxasrUvk4PRDyzL8R5c5iwwUpskjCUQH9uDP3iHZeuwxNCLaewjC9zd9Pu2c4f7",
  "key26": "DbWUeXm6cTiCCKaSPEXpntnGryKsZRyXcc5CmBWmHCwZHEBck48Mi55QudzhZGfmcX4iuU2X8wqvf9ucHW1D1ub",
  "key27": "K9a4BDKNtbJKuo6nh44SnaHAYFxKXxXD4uTprH47UFeet3vPyqHVKKk4igxWctnJ2hnVkvFEv9ZVGbc9j9MKQMu"
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
