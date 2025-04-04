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
    "3RgRiX2wVibDbgWsVQ2Zniaw7YekVXznZGVdPL16zvsWixHymG1j7fmE9ChB9r3T2fCDMDcwJNoBkgjzDnwk4EVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eytxh446qkoyYq1QLSC7rLbj27oytT5pnRtMeFdW6AmR78N1k53L41f9xEAvPAGXKvLeAHBhio3Sc5YaK2kj7Cz",
  "key1": "2MijaDtjxTZhyLGmq5xqMyqUgE3zR357ypENYWEmyUUzcBsXwELzZ7bwVa7x3FxkHSPLfCvxMC615HSWeMuamGg9",
  "key2": "4C6pEcyWRg5ux5466UM23iEHeJvvhsv7iuiuTAngixfPJ4rYpWEKyhcXESQYTM2tWNDfDJri1E4WZUM1YsdmunKH",
  "key3": "4CCx3tYeNmdwshMSrxrMHXDYYxh4jSp8kBXgV6MqoWve51tC8w4nMsEXG74aivjwCeWuaCJHnut6eiCGcPCnv7W6",
  "key4": "552DMv4frfG523aC78UrmjRzzDZViwCVeiuRyGVkbV1vajmvACLTTe5CBYrZobWMPeWtbUZj5Qu2nvQwRB2CM8rH",
  "key5": "x6GuQ3Jnpd3XqigZRwuYB6pf2eamm2oPk6KEEknA92NRHZfs6ukFHSM3o8oqARBFH75a5p9N4jUXn6V3P9G4yPv",
  "key6": "3vafHsWXCEHVkYNzdY8RMwr48sPezd5iW89CeU2R4PJCt9GzW8wU2ytDJRkdgQ8WDULSabAid3Cs3cJ1cvxz8jv8",
  "key7": "5fs7JEVos2ZZpcSeQpHbmzjA98zi5smwstFS2Aet9ecRgwJWqKTgpFVQdnrYKRvVD45ELk3wmg8ykexX5wEmMwyg",
  "key8": "5s3cgnedcgR6mDuFbd4CVxRy32MC1rkFVsDN21jyoHWamBU54zAU9aXpin4R1qxkUTXgJvbgPydvXzvA7ErR1Wkh",
  "key9": "cXag94JHbA4ju2CzeDHSAdEUgwgfhH5YkZ8guJVL8rmgM7413rgWX9vmyLpVv54w4p3JmEd8LfLHayUpXphjGkx",
  "key10": "5wU28d2EmyDe526rC2TwTrZEB7eC1zUcYczafwkHY5ogPxQUaCowrmuAupF8M67dtKgtCsLdMiRh9kbayoPpWpJJ",
  "key11": "WK1WYn8XHjuF877nJgYGkCFMF1SE6tSTpe5WQRNn5zeiH9VRinhnVEBmUzCV5ksZ67asLXjMrGikm9T1NVJwLPV",
  "key12": "62FY9qno2nfyfJ3MWXPFbLmtT8Kpo9g1HLpDjxy8aUFHq4MF8nynbcNfckWHFvtFrmdKgc5oxjT5LLWZDNPDFBRt",
  "key13": "LUa5LbZt32nwbonMDaBs9WtnbrVy1zeZRYBftVcbTegMbQE2H1DjQ5F8LoCHVYGrs8WqF1xNcKhJP6ViUXUaQiw",
  "key14": "3nqYJbAt8TD9ysBKynYnEnDcgrg7cyE7usrC5eyphogmQpvJGWkwa51tStU2zBXLNcnnQhBTDUvUoTY8GN84vvQU",
  "key15": "rteJRk43UcmCkQdDTbCuUKTkmq2aS795oXBnxQqQCrK5Upj5Jtk1ZeK925APqNGNP7x2CJzvUiNeVzaqyS47NMh",
  "key16": "BJ3mjLDhoeqy5H6tDN64U41tYU1AeByn72qw7FzxYscgDZN7HppythCmm1N5aeUJ1BqVDm5aWTbFFvYk3CLXJqs",
  "key17": "3JyctiS6NAAWZPLqpCpBVQQwz2vQJ6KW6FNJ5m7cK8hvwFBj1zowiZJnKUeBhnqN27kHeU3Hz9mK3yZg7GPt1QJJ",
  "key18": "65omYybJM92h1XR3Te8zDgp5aVfHzHNDXiQLCW1QBGB7VystLieCmYhDvDu1Cz5kxG78Em4ztP3zUiFpt3HXZD7M",
  "key19": "4VDpmwuB9oRy7mB4vqG7zCwFpcnx7W77ADKW6T3V3mvN1UH1aoJUZz2B4cKasBDfRgNx8wKfL3Nzc3E7CM4WtAam",
  "key20": "3jULCsSHiXBwrc6UH3XQg9eRZJfyQLGcU5wScLAzv67VRfQ7ZjWN9fZSNaNS6KMrCprwTYZ6etfDoDEzSw5uF24N",
  "key21": "2UMNe64v9gPeD62vXhw9BxxePKSivpfqH8Du5DZ9YMHbdfTGGrUcGH837WRVHq7X59N26oAbg8RSsEcSXs2d7DYL",
  "key22": "648yee53TXXeWuM1pytNEtvDGZsk8Gi5EYWwd7zc94kefCPpnz93EFtXjjTeCymbYxncb3eLm4n5bCHF3VL26dQX",
  "key23": "5SngmNVMebYYWUpoznKu4uE2kX2EtRjtDu4mvTSG9bJ3xGKbX8XLriZiWDnvW7oEYfeDeie4TPghCdTmgX2vmjdN",
  "key24": "u2rk1ZJK7i8HFRaL9tKojsrvwDEvz2w66KvgaYhDKYUBqyLUBFnTqTmDzDmW1BAHLLstgPcTChJXTjyGmEybrmt",
  "key25": "66DJ1HE96gBA4aH4dpYfQaxssxzDVuXojkrK2PmPyXYgApN93Y8pdgRQcgn4wy255y8tTgroDNzXdFtMoU6bVhEg",
  "key26": "4rocqB4PhoSbXUxzpWGdXtxaJQFbXevBipj63bjiAxquFik62ePXpQxxoT6tLUq6Cd4SngwMQf6sZmRv3sxZyc4c",
  "key27": "4cJwQQ9fWyTkXjLsXD6ZwkjTFcV3nbbYSw3FK72CZThBjJQ9YMNVv1Fdj4yD688jMojubaySzaL3qJtyTREaj2dn",
  "key28": "V7Pz4X2AQnU1esJJc8yT71bRt7AEmSiWaSfWn3prH2oJaLWoK68CSMMbCNHUqmfGCrLfXUEuHf9EZPnudYQcVxh",
  "key29": "2H52iXW8BaDQKbfcLzYbWy3C9xu66b3bMXDHUTL1P9Fnfy76nhEvkwHZ3NgcXZyCSkoK1RJYAijAH8UqynVKme1",
  "key30": "5GCFh9yptDGi8LvfjqSftZa6Ezu1vV1oPBgsCkqF4VQJd4YjmzJ5SG2yJnYCewvEBUfmrECaHm4ZFfhnsJnUmRda",
  "key31": "2BpGHdX2hbs7pdnU3JiaBEAsfbTmGhHtJnPHo14P2d4ZBtvtSxgwYZBGAyqr8cYyuC9p7WipS3UhLskD3tknjq5w",
  "key32": "EB4SodduKcW1K553S9tGo7txzj7ux6yH3JAtZzf99kMKm99mzHuzCWVtmqq2LnwZ42Eaayo3gSUkpY6RuUrorfn"
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
