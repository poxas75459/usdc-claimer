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
    "3Ub3ikKhgEQGvfX2aogykEUd48ZJnXxhATqodtccHQNxwvbgo7qTKUWt7sD7swbSdZB564eVYxnW9kxka7HsNSUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HgS1wXMQZGvKJcwS7uNfytwyrcNPv2mxR332eGaY1ibW7ycnNGRqPi1Tc3ZYazckCp5jnSeFKe6mNRVGKtiKWQi",
  "key1": "4YghAcRAaT8euYMkGtDgNYGHLLLU6hiLmUpz3jkW4z4ND6c9gZDzjLzLMZmdHB1xFqmn6oXyo1koXppnQNAd7UAe",
  "key2": "61QS93j6KgLP1HAF6b8VxciUC2863N3j4fkHrzX8LThXj62RZpf2QknQcRmohpShWZHE3q4vuCpWWALCDgQpmEDw",
  "key3": "3aPWwx6Qz91BTxEkPzaWpS2kEYPtrFjDGfFB8phamLsNckomKrTFiicGjHU2qo2BhZLpDht6Xu1TAn4xSENRiXn5",
  "key4": "3udz3XvXg4g3wd8a9EKK8psuc4GSiuNaskko6EUacosixBqwKeWSotrR5Gw1YzCX6TQrRpRVw7hhaVzi1eyVxpfn",
  "key5": "3oZLKLAkq6ZjTR5HJepWzKMp2BVv1MSqmhH5kKPcQEBgkhKaMvggehnhbc4769G6ZGiDygMo9obK55DxK37GTLe1",
  "key6": "2ZuxZorxTB32rKhmpBekDhWdi79RVf15WwbN3B5rEsPiQFdfttbbmdEfJqhpkiqfkktcX1MDimKdA7CFp7kAQRiA",
  "key7": "vt9kFFLKtg4aeB8noyBN4og6fnFzNQbQvSU8wUHGnf8YmHf2LXsHToL9ke84LFEZzYU8WyQ9wLsqQh5ugZpsBpe",
  "key8": "3FX1sYUfoDWJNUkgxUFhApwiKY8rLPEEijg11KDdBosr1UtXbkL5Ruv3pKzFm3fJDbM6uq6gb1bV5VjgNFZpxAgj",
  "key9": "GCU7TsBy4RGFSLosx1EPwAzBk2WSPnqhwgQn1ufvg4HpH5BLSDiCQXsnvYHq27VhNvF5xqJcoDCDMDFBhXuQmq4",
  "key10": "MZnMkMtBg9LxC2CX9u5zEXnxqLg39Vz5TY9urPHWCqFPTDTRTus5kdiZh6kdm47L1BUV8jgRkEgiQWeD93uJMmb",
  "key11": "48s3wyQLKaVej4FoVcTomdUZ5ZSYyhGS37MjxQcoz4SQuaRuNuGs9FfzrXSC3oUmENftVmWpc5jq4sZk1ggFGiGJ",
  "key12": "3LvBmgNqWzyafzuSAYPtChE3tyiXArFhwtsfgtFCTuhUTHPEa71ahy3ThBkzuWDpM7NcfVAbPJ3CzxbJUeWGWfmE",
  "key13": "5wJPazXw5UjWFp2LbhQHyL4hrFKw9w675DiWDTmQoxibxtfUWoRvxpT2mcNHrvRkfJ15qbhH2rhH3pZQuVpt7uyu",
  "key14": "2Q7i8oKSJ9zLffiYyhGmDrmBhGsgsWLDXiP5UiqbdELvcoc5HXjyViBWiNoeT4JM5KoXpZAoAhNrpGKLjRof6ACB",
  "key15": "5yA9gWjD1YD71iRACQHucbeF9D9ajGJtzMEnY3GnGrD1idm1wyRmQ9BxjyXcNvKMVgY7L4DQ2jUWNjVk8okXmtZP",
  "key16": "3ckrcXiuWSdcbnBymC7Lhem7pbpp5f1sJHcuEMXMXsPVXZ1xzw93PmC1t7zY6stjmi8RFEkHBoQ6ConK21dmQU8h",
  "key17": "5Fg9HYpkRcgBHua8VtqFiwFjcd3KeR2DepsJPwXeFdgtAWL2pobbdrbUG47cTsmVwFAHDVong7kMphUZGH277TBX",
  "key18": "ygC4wJHqXSyFbTZho7Ss3nQCunjfaoPc5P48YBsQekfG5P7pwiWQkDw2Ea9YA4piQPFFais2ySzNx5XdYKnFkUK",
  "key19": "5bctFhpoG9m5w1JecSRBQKtZjzumvZ5xVkjhBzSGFzPP8xfdB7ePPk8wD5MePGr1GrhPnKTxfRq8dpoxXsLnziFC",
  "key20": "3ui4w13CMgWKeL6Au44b4sgDXnbJo9nLVjnWH6R2LE9cYMvyd3ZWYFHjjHsM954Fhi1PaT9PLi3a6B9mMzgdV6nE",
  "key21": "53TwwyzxvC1Qp8rSczCy8QL21gBF2de4K982uy5xuVAb8SyxDqkYFHc6hdSeoG8KokMoWBDQ9aHoYT19t5EYKw3r",
  "key22": "4bktxFuePvgScqUjfM6o4Pqz7AMuhV98vq1FtS82CDdsn8XrrFLeeZDyAxXW5b1sNXkgTWhCZevm6wtgVvx2hZfx",
  "key23": "mneWDRuMuA69FvPdmh3aNqzrrjpwVNamSBT3E8M2aBB1URQmttQLZj4dZXGiqZ9zKBBXXuSUjE95rQqhPqVnn3K",
  "key24": "3ZatAARYPmq3J9ULu7Ure22otFnZ7oyCYpARHNx6R3GJmbKteogSvpsyNHRCxys7MmgG5sCqYxX3qXvAajFDV9sq",
  "key25": "3WEgRCTXAG5nRfwELiKnNKY81XvTSuis3tUtuQca2Gt3FeeozcidqDhzpcDVyXoPAFeWYwaQ5E4SAPw1NE8EmGj1",
  "key26": "26bP3MhurA1BsSPmWVJgbhVHVqKmSzfzqFH5QLx366hdeDt65wgoUXNeSZ7KWHjNr7XrBo8NyjDyvYrrrAHqUhJn",
  "key27": "5uNp6TkppE5ypx4Nfv28sEajWGRPprvQ7i5XaZmQhF5WrgqLD2EUc5pzmMd4Rc6tEVo66NNmodkNdFuuc9GeaF62",
  "key28": "cAroF9XF4zqaL5QoTHF3bRRcuQKbdLabJxcX5sEsrQfsR1jF8Hc2Rut1wBkqvkVWU7FVY39M2iC22575KdHJzq9",
  "key29": "4haH8fB2LkcWP4QYugJ2m6YstxMTdj7mFRd2fL2Q8LRVFJPLfL6JcE8CP1G7yAmhcpwKDSFPpWHADKWTsKb3s7A1",
  "key30": "3hbWLUD4xZQJrykvVaryjwvNvNyah8fumbc42PCKQvk4YkEQjdhZ3dxE3ygycr85nwcMpRFKYhS2d49dnLW4QBfo",
  "key31": "4TVSB2cNmg9GD5ohtcexb8FMGwSt5yxLWk6A4o7bbTSTgdpjqbPsY5ginP2FyAfp3qc2gxYT4e1uTGuRQFw4kbq2",
  "key32": "2yDa2kLTfNgR6P2KbA6u34dL4VTB9GAmrEh63KXniQfKbT1dNz4dmAPSD1VN9vdeks8BVh6mjKSQXsrRNek1voLA"
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
