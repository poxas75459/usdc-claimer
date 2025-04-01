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
    "3qsJ2XKfLZPDccek8Unt79DrSjDo23DmWPSVBBoeQM2YoBqeVD78usf1dQtyEomD4t4AL4z8r5vkDK8jL9aXT2uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EgWS1ozN5DUCw4zXBBAos8SEZyCYz4wwk7mPs3ZMXHJAPLa7LYqZvcuCeSp6VZJf9ASJ7his6fX1E2A9vYWQd6M",
  "key1": "RgfGEX8tq4Qq8eEoHAhadQhffdGdqDiuQYZX9Vw3x4wNeQHvWwwU3jW2tKjNbpUa8JG7eCiDy8hUS6QyD8S2iN7",
  "key2": "5zau9xZS87hrhA4qs3fpYv1bcfgdCo6DicEN4MA79hrvtkAhwM62wVts6CAVPnAWvv713Wx25kMSV2Tf82qyjFFN",
  "key3": "21jGuTiYv3xxEJxLg859cX3mCTUpLkRiTbxgGZJz69zrKdRm7ZsVPFvxfr84rfqyApVYXkbm83JspEKnTLZNHYkb",
  "key4": "3T1tjQJrkYjaYw9PuvXzEDfppjHd416ynabpRSJvdmXNEpYzGcB9NhShAqDXi6hcTujnMBeuVFjkgNf3QMeypJr1",
  "key5": "4EEpuVJ3CtpuJ2owWtBcrsMenbSHfBJxhJkoqouWnKyACdjGAHv2pfYSXvz23UGzQshxN2eEYgpf2Xbc4X1tmTJM",
  "key6": "4dF3wF8Gpp17vV28TxjZpuGmJK7m4Bb8Rpg5Zjc3k6vyD9VEX71EhpkjWkeL111EuBAQeR1CiKM9cQQEjgEpdxZD",
  "key7": "63JsVbSVs3xV9Y5mHNLk8uTcCFixEepc5HNoG6ujvibApEGQNf5eBQr63xC3ijfW5PNiGGs2CfBYD8LwtpSRiyZZ",
  "key8": "5MdgaCJZaWL4rWMnpmMCBxdon2oEowprg9A4iFWNaW654Lrt8wmpFgH7r8Zx6f6EUJ7f2Z4Naq7XhRYBbceVcGcA",
  "key9": "26RzfaqA62CuBjHPiyRCahGVQeG12UGNSaoj9hceUBNMBjujztwtbigDz45HGH2ihzFqQozgcjUaPR2bN7AgPCEa",
  "key10": "4cnEtiwnrfrtdiAsT28wHDJtE2p5HkftabfTbTNTX6egPjo222V9AHDBLjxFNLUUyjgbggQUf5GDFEPaJ6F2bKig",
  "key11": "2cvMYB3U5K5XCV1VkJFeq6o4s4kHxgi2wzDgroUDQJfSzEg7zDugXpaUPUcywDGhR3GPH12UQcjRHX4WZB7afwUE",
  "key12": "65a2VYBLcHdEdPqSGJn4vU8hG6gU6F6mwFZmpJsoQt9ATS7SV67TJEVTXkRFHKuK4QS7BHEroGowvN5HHnZA4nB8",
  "key13": "5uxZ8vaJtLVjjxj1WKF4ttX7C93wCLnm6Ya95ozKK91A9C9AFr6jRBxqKZu4QepvFvTn2QQByBj9MXBVzRSMaZe2",
  "key14": "2bA9VdjAjHQv8a6qaTnM4jtAz44EWgoe4mrtRDEahxgQW592S32BEAcSKmyZY8hD93Dw92hmo6Cr6r7hrDVyk8Uz",
  "key15": "29ySRUrUDVTHVXJFFYBJAKzU1nVMQC1FhUuAaFBFy6yPcNXUegNtzFb93wp63zhc4DNk2m9SMM1U6mx5qYX6HoN5",
  "key16": "XMW455wL7Ey5PjSCKjTegpeDAqvBzpg8wMRe3oTTZwq8uFwiqaGThKbGCXLLHb5znqDGq7zdZ2hYrvirWNTMu1Y",
  "key17": "5hyCeHUQbcz5fpmdHDRsz4rjsQpXr371HsHpGPagtXXPrqcXewo18gLd5U3Hnhwd2Mvwr6X8eWeRrCfXsc1Eb2r8",
  "key18": "4R7gCvfeh5eGsH8LkUywNWeVbVPPxafpFLxoY5xa7vrK5HM6zZmW1cYsDLH7ttSVqjvuyBDn45nezvi5f4F4FWVZ",
  "key19": "BGKu9dYAQ55tQZJ1oaYc8suCBEMuXq53CDoCTTRkz4xd2sp9LVvuqDFgdDEJDaNDC8jZ1bV2VgTdHRKaDkoi1WM",
  "key20": "3shUZkBvADjeBU7WPhHAhMgoS78pXk9Sq2Te3CdzAfr1iizZUdDwummhREMGS7MfSWgZrmfjZTSGZ3ZJjqxS9LEd",
  "key21": "4znLqBmGxVq21DfLiagAy9JDe4SAiW8FFMhVVTZ6ERuxZMzsmfwAj2PmGbutpVzmEuwnWrnTd8bJXPH29rMqWjeQ",
  "key22": "67CsvkoriAsF4WMAFnjnYVydFT5E6UszGtdgHfqCksWi5TNGq6CopH2JuLRrEj17jR7dEWvYYCwgBCrqUXgTmcs3",
  "key23": "TkxoHbdwrePeqSXiGvMT1pNU445qGi6JENTSTwEu9YBHZGVTHmPba5XQ7axxhrjwNV3uapsJ9i3jBrQof4yMKJ4",
  "key24": "4TBiafueEbWTL1zjyQYEwtftubKjhSkfkBWzyuRZ4CSKr2rcPP727i7C5Y9fP55fHuaunFn1qcPno8F8KvwV7fNv",
  "key25": "2jinzN38SY4VUq4q1qJXBz6SGCxYtKNB12TMvR7aG6hbbqFLrUyuD1GZESgg653HqUiqqESjfYMrAEu89seqh9Pu",
  "key26": "ea9V4DTDoLJbjhJJWBtUbpkzddSfKCiXBFiqzGTLCg2toSahMnr3ewAv9jbgAqpu2UBELC7mn5M3ofdB9DGwnHr",
  "key27": "5wD6qoEd12NMy48YVi3TLMG95jmjQqhWLfwBQSqYtxkUsN9aFPrjJgzDQ5nEiKU4Nksj7akaUx6XUt2CsGZ2wqKn",
  "key28": "5dgFVrHVEJR57yRNLu1d8kHJ6r61hjrzD2ihaZ3r9NGV7UmwJL1Q5FwubkmAuLvQ9KGxeUgvzR26oPcwDdeLYRF5",
  "key29": "5kp9PN1cE88smjPdVqMRmQWenwTv2onEE8w1FqDVk77iVbr81vCzr9TJoXCPMB8pjzAWzwpkJES1pA85PhFKj7Sy",
  "key30": "3PJtAxJXFdFEtgxBMWQzWncYKPvnyrtNpz5aECmdH3qnh8DboSjHRN9VPbuhRFhbcktiEbEdN9NmAq33vgKCbQxU",
  "key31": "2M9RBVjJgk4SaDw7wQbM9DohR6Y6kU8Ni226DKwnSJksaFwawMKDKRjTkocLmiH9j3rUgvgLubdkAaLuFp2DdTsg",
  "key32": "2nuiaXip6KRpcB3pqQdSsHce2EPtm86Z4i7x7gWc6v8DATFU1ETsisvGepFcEA6GkrRYnFjcs8rmsB9wiELQ3U4V",
  "key33": "2hzVHtvAsCyc5uTyQhajvvx4pzNE3p4fy1yry9TfUEEmWmZtr1EVwvTuCUi3CH4Y8KDPbXr4k4qadPdLvRdmFEzZ",
  "key34": "2XZ1qwTpfVmN2wJBrRm79B42xnUsN1b5iHYZ7unZrPwPpoK3ze5Xx5vJt8QJEJPt7NkJnisZeAEKLQeAFjUBRnB8"
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
